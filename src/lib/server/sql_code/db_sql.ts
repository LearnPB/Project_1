export const TOP_PLAYERS_PAY = `
    SELECT 
    Name_ID, name AS PlayerName,
      CAST(REPLACE(SUBSTRING(TotalPay, 2), ',', '') AS INTEGER) AS CleanTotalPay
    FROM 
      alldata
    ORDER BY 
      CleanTotalPay DESC
    LIMIT ?` // Using ? as a placeholder and not '$LIMIT' or 10 is to avoid SQL injection or make dynamic

export const SQL_PLAYER = `SELECT Name_ID, Name, TotalPay, Nation
    FROM alldata
    WHERE Name_ID = $name_id`;// Both $Name_ID or ? wont allow SQL injection 

export const SEARCH_PLAYER_NAME = `
    SELECT Name_ID AS nameId,
           name AS playerName,
           CAST(REPLACE(SUBSTRING(TotalPay, 2), ',', '') AS INTEGER) AS totalPay
    FROM alldata
    WHERE lower(name) LIKE '%' || lower($searchTerm) || '%'
    ORDER BY totalPay DESC
    LIMIT $limit;
    `; // Using ? as a placeholder and not '$LIMIT' or 10 is to avoid SQL injection or make dynamic
