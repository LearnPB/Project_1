// src/routes/toplayer/[player].js
import { error } from '@sveltejs/kit';
import { topPlayers } from "../toPlayer";

export function load({ params }) {
  // Replace hyphens with spaces and convert to lower case for case-insensitive matching
  const playerName = params.player.replace(/-/g, " ").toLowerCase();

  // Find the player with case-insensitive comparison
  const playerful = topPlayers.find(
    (player) => player.PlayerName.toLowerCase() === playerName
  );

  if (!playerful) {
    // Log the error for debugging purposes
    console.error(`Player not found: ${params.player}`);
    throw error(404, `Player "${params.player}" Not Found`);
  }

  return {
    playerful
  };
}


// export function load({ params }) {
//   const post = posts.find((post) => post.slug === params.slug);

//   if (!post) throw error(404);

//   return {
//     post
//   };
// }