<script lang="ts">
  import Button from '@/ui/components/Button/index.svelte'

  export let currentRoute;

  console.log(currentRoute)
</script>

<div>
  <h1>Home</h1>
  <Button text="Click ME!" />
</div>

<style src="./style.scss" scoped></style>
