<script>
  export let data;

  console.log(data);
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
