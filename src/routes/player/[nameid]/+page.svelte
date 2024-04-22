<script>
	export let data;
	import { page } from '$app/stores';
	const playerid = $page.params.nameid;
	const playerName = $page.params.playerName;
	// const url = '$'page.url;
	// console.log(url);
</script>

<h2>Player is Coming Soon</h2>

<p>{playerid}</p>
<p>{playerName}</p>

<br />

<p>{data.player.Name_ID}</p>

<p>{data.player.Name}</p>

<pre>{JSON.stringify(data.player, null, 2)}</pre>
