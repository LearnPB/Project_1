import { topPlayer, } from "$lib/server/sql_code/db_index";

import type { PageServerLoad } from './$types';

export const load = (() => {
  const players = topPlayer();
  return {
    players
  };
}) satisfies PageServerLoad;