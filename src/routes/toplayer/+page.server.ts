import { topPlayers } from "./toPlayer";
import { topPlayer, } from "$lib/server/sql_code/db_index";


export function load() {
  return {
    summaries: topPlayers.map((topPlayer) => ({
      slug: topPlayer.PlayerName,
      title: topPlayer.PlayerName,
      totalpay: topPlayer.CleanTotalPay
    }))
  };
}
