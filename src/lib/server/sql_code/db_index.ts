import Database from 'better-sqlite3';
import { TOP_PLAYERS_PAY, SQL_PLAYER, SEARCH_PLAYER_NAME } from './db_sql';
import type { Player, playerID } from '$lib/server/sql_code/db_types';
import { DB_PATH } from '$env/static/private';

const db = new Database(DB_PATH, { verbose: console.log });

//...... To check if function is working ........

// const lognow = await getPlayersid(2)
// console.log(lognow)

// Export a function named 'topPlayer' with a default parameter 'LIMIT' set to 10
export function topPlayer(LIMIT = 10): Player[] {

  // Initialize 'sql' with the SQL query to be executed
  const sql = TOP_PLAYERS_PAY; // Using ? as a placeholder for LIMIT value to avoid SQL injection

  // Prepare the SQL statement using 'db.prepare' to avoid SQL injection
  const stmt = db.prepare(sql);

  // Execute the prepared statement with 'LIMIT' as a parameter, passed as an array element to prevent SQL injection
  const rows = stmt.all([LIMIT]);

  // Return the result of the query cast as an array of 'Player' objects
  return rows as Player[];
}

//you cant have both an import statement for 'SQL_Player' and export function SQL_Player (local distribution).

export function getPlayersid(name_id: number): playerID {
  const sql = SQL_PLAYER;

  const stmt = db.prepare(sql);
  const row = stmt.get({ name_id }); // {} or [] is based on what dynamic varable is '$Name_ID or ?'
  return row as playerID;
}

export function searchPlayer(searchTerm: string, limit: number = 20): Player[] {
  const sql = SEARCH_PLAYER_NAME;
  const stmt = db.prepare(sql);
  const rows = stmt.all({ searchTerm, limit });
  console.log(rows);
  return rows as Player[];
}
