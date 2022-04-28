<script>
  import { Route } from 'svelte-router-spa'
  import { routes } from '@/ui/routes/index'
  import Sidebar from '@/ui/layout/Main/Sidebar/index.svelte'

  export let currentRoute
  const params = {}
</script>

<div class="main-layout">
  <div class="sidebar">
    <Sidebar currentPath={currentRoute.path} />
  </div>
  <div class="rightbar">
    <Route {currentRoute} {params} />
  </div>
</div>

<style src="./style.scss" scoped></style>
