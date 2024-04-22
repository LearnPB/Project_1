import { getPlayersid } from "$lib/server/sql_code/db_index";
import { error } from "@sveltejs/kit";

import type { PageServerLoad } from './$types';



export const load = (({ params }) => {
  const playersid = parseInt(params.nameid);

  if (isNaN(playersid)) throw error(404, "Player Not Found");

  const player = getPlayersid(playersid);

  if (!player) {
    throw error(404, `Player Not Found (ID: ${playersid})`); // Convert player to a number
  }

  return {
    player
  };

}) satisfies PageServerLoad;

// const player = Playersid.find((player) => player.PlayerName === params.nameid);