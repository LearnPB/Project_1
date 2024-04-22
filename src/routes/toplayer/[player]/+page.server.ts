import { error } from '@sveltejs/kit';
import { topPlayers } from "../toPlayer";

export function load({ params }) {
  const playerful = topPlayers.find((player) => player.PlayerName === params.player);

  if (!playerful) throw error(404, "Player Not Found");

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