<script lang="ts">
  import { Router } from 'svelte-router-spa'
  import { routes } from '@/ui/routes/index'
</script>

<div>
  <Router {routes} />
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  }
</style>
