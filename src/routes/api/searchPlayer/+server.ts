import type { Player, playerID } from '$lib/server/sql_code/db_types';
import { topPlayer, searchPlayer } from '$lib/server/sql_code/db_index';
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET = (({ url }) => {
  const searchTerm = url.searchParams.get('searchTerm')?.toString();

  let players: Player[] = [];


  if (!searchTerm || searchTerm.length < 3) {
    players = topPlayer();
  }

  else {
    players = searchPlayer(searchTerm) ?? [];
  }

  return json(players);

}) satisfies RequestHandler;