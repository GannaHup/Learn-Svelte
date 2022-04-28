<script lang="ts">
  import { Router } from 'svelte-router-spa'
  import MainLayout from '@/ui/layout/Main/index.svelte'
  import { routes } from '@/ui/routes/index'
</script>

<div>
  <MainLayout />
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
