<script>
	export let data;
</script>

<a href="/blog"> Blog </a>
<a href="/"> Home </a>

<!-- <table class="container">
	<thead>
		<tr>
			<th>Player Name</th>
			<th>Total Pay</th>
		</tr>
	</thead>
	<tbody>
		{#each data.summaries as { slug, title, totalpay }}
			<tr>
				<td> <a href={`/toplayer/${slug}`}>{title}</a></td>
				<td>${(totalpay / 1000000).toLocaleString('en-US')}M</td>
			</tr>
		{/each}
	</tbody>
</table>
-->

<!-- src/routes/topPlayers.svelte -->

<h1 class="text-3xl font-bold underline">Top players</h1>
<ul>
	{#each data.players as Player}
		<li>
			<a href={`/toplayer/${Player.PlayerName.replace(/ /g, '-').toLowerCase()}`}>
				{Player.PlayerName}
			</a>
		</li>
	{/each}
</ul>
<pre>{JSON.stringify(data.players, null, 2)}</pre>

<!-- <style>
	.container {
		min-width: 300px; /* Minimum width of the container */
		max-width: 800px; /* Maximum width of the container */
		width: 60%; /* Preferred width of the container */
		margin: 0 auto; /* This centers the container */
	}

	table {
		text-align: center;
		width: 100%;
		border-collapse: collapse;
		margin: 20px 0;
		font-family: Arial, sans-serif;
		border: 2px solid #000; /* This adds a border to the table */
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
	}

	th {
		background-color: #4caf50;
		color: white;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	tr:hover {
		background-color: #c8dbd390;
		transform: scale(1.02); /* This will make the row slightly larger */
		transition: transform 0.3s ease-in-out; /* This will animate the change */
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* This will add a shadow around the row */
	}
</style> -->
