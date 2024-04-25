<script>
	export let data; // Data received from the route (optional)

	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let timer;
	let searchTerm = '';

	/**
	 * Safely fetch players, logging any exceptions that occur
	 */
	function safeFetchPlayers() {
		fetch(`/api/searchPlayer?searchTerm=${searchTerm}`)
			.then((res) => res.json())
			.then((data) => {
				tracks = data;
				//console.log(data.players); // data shows in console
			});
	}

	/**
	 * Safely handle search, logging any exceptions that occur
	 * @param {Event} e - event
	 */
	function safeHandleSearch(e) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			const target = e.target;
			if (!(target instanceof HTMLInputElement)) {
				console.error('Event target is not an input element');
				return;
			}

			searchTerm = target.value;
			safeFetchPlayers();
		}, 500);
	}

	//console.log(data.players);

	let tracks = data.players;
</script>

<a href="/blog"> Blog </a>
<a href="/toplayer"> Top Player </a>

<input
	type="search"
	placeholder="Search..."
	class="input mb-5 search-bar"
	value={searchTerm}
	on:keyup={safeHandleSearch}
/>

<p>{searchTerm} {tracks[0].PlayerName}</p>

<div class="container">
	<h1>Top Paid Players</h1>

	<table>
		<thead>
			<tr>
				<th>Player Name</th>
				<th>Total Pay</th>
			</tr>
		</thead>
		<tbody>
			{#each tracks as player}
				<tr>
					<td> <a href={`/player/${player.Name_ID}`}>{player.PlayerName}</a></td>
					<td>${(player.CleanTotalPay / 1000000).toLocaleString('en-US')}M</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<pre>{JSON.stringify(tracks, null, 2)}</pre>

<style>
	.container {
		min-width: 300px; /* Minimum width of the container */
		max-width: 800px; /* Maximum width of the container */
		width: 60%; /* Preferred width of the container */
		margin: 0 auto; /* This centers the container */
		text-align: center;
	}

	table {
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

	.search-bar {
		max-width: 150ch; /* Maintain the existing max-width */
		padding: 10px 15px; /* Add some padding for better visuals */
		border: 1px solid #ccc; /* Add a subtle border */
		border-radius: 4px; /* Round the corners for a softer look */
		box-sizing: border-box; /* Ensure padding doesn't affect width */
		font-size: 16px; /* Adjust font size as needed */
		background-color: #fff; /* Set background color */
	}

	.search-bar:focus {
		/* Style for focused state */
		outline: none; /* Remove default outline */
		border-color: #888; /* Change border color on focus */
	}
</style>
