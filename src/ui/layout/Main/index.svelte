<script>
  import { Router } from 'svelte-router-spa'
  import { routes } from '@/ui/routes/index'
  import Sidebar from '@/ui/layout/Main/Sidebar/index.svelte'
</script>

<div class="main-layout">
  <div class="sidebar">
    <Sidebar />
  </div>
  <div class="rightbar">
    <Router {routes} />
  </div>
</div>

<style src="./style.scss" scoped></style>
