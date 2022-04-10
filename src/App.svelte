<script>
  import { Router } from 'svelte-router-spa'
  import { routes } from './ui/routes/index'
</script>

<div class="flex flex-row border border-red-500">
  <div class="w-96 h-screen border border-black"></div>
  <div class="w-full border border-blue-500">
    <Router {routes} />
  </div>
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    padding: 0;
    margin: 0;
  }
</style>
