// import { topPlayers } from "./toPlayer";
// import { topPlayer, } from "$lib/server/sql_code/db_index";
// import type { PageServerLoad } from '../$types';

// export function load() {
//   return {
//     summaries: topPlayers.map((topPlayer) => ({
//       slug: topPlayer.PlayerName,
//       title: topPlayer.PlayerName,
//       totalpay: topPlayer.CleanTotalPay
//     }))
//   };
// }

// export const load = (() => {

//   return {
//     summaries: topPlayer.map((topPlayera) => ({
//       slug: topPlayera.PlayerName,
//       title: topPlayera.PlayerName,
//       totalpay: topPlayera.CleanTotalPay
//     }))
//   };
// }) satisfies PageServerLoad;



///Amit////

import { topPlayer, } from "$lib/server/sql_code/db_index";
import type { PageServerLoad } from '../$types';

export const load = (() => {

  const players = topPlayer();
  return {
    players
  };

  // console.log(players);
  // return {
  //   summaries: players.map(() => ({
  //     slug:  players.values.
  //     title: players.m,
  //     //     slug: players.m,
  //     //     title: topPlayera.PlayerName,
  //     //     totalpay: topPlayera.CleanTotalPay
  //   }))
  // };
}) satisfies PageServerLoad;