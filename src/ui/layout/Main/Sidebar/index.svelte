<script lang="ts">
  import Icon from '@/ui/assets/icons/index.svelte'

  const listMenu = [
    {
      label: `I'm Ganna`,
      value: '/',
    },
    {
      label: 'About',
      value: '/about'
    },
    {
      label: 'Projects',
      value: '/projects'
    }
  ]

  export let currentPath = '/';
</script>

<div class="wrapper-sidebar">
  <div class="section-top">
    <img
      src="images/profile.jpg"
      alt="Profile"
      class="img-profile"
    >
  </div>
  <ul class="list-menu">
    {#each listMenu as menu}
      <li>
        <a href={menu.value} class="menu" class:isActive={currentPath === menu.value}>
          <Icon size="w-8 h-8" />
          <span>{menu.label}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style src="./style.scss" scoped></style>
