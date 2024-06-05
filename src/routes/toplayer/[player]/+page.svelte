<script>
	export let data;

	//console.log(data);
</script>

{#if !data.playerful.PlayerName}
	<h1 class="text-3xl font-bold underline">Error 404: Player Not Found</h1>
{:else}
	<h1>{data.playerful.PlayerName}</h1>
	<p>Total Pay : {data.playerful.CleanTotalPay}</p>
	<p>Player ID : {data.playerful.Name_ID}</p>
{/if}
