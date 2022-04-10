<script lang="ts">
  const listMenu = [
    {
      label: 'Home',
      value: '/',
    },
    {
      label: 'About',
      value: '/about'
    },
    {
      label: 'Projects',
      value: '/project'
    }
  ]
</script>

<div>
  <ul>
    {#each listMenu as menu}
      <li>{menu.label}</li>
    {/each}
  </ul>

</div>

<style src="./style.scss" scoped></style>
