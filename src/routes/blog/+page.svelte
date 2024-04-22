<script>
	export let data;
</script>

<a href="/">Home</a>

<h1 class="text-3xl font-bold underline">My Blog Home</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>

<pre>{JSON.stringify(data, null, 2)}</pre>
