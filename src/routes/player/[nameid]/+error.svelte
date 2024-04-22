<script>
	import { page } from '$app/stores';
</script>

<h1 class="size-1 danger">Ooopsie Whooopsie</h1>
<p class="danger">{$page.status}: {$page?.error?.message}</p>

<style>
	.size-1 {
		font-size: 3rem; /* Adjust as needed for your desired size */
	}

	.danger {
		/* No leading dot here */
		color: red;
	}
</style>
