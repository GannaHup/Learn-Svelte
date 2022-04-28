<script lang="ts">
// Icon Menus Gradient
import CubesGradientIconMenu from '@/ui/assets/icons/menus/gradient/ic_cubes.svelte'

// Icon Menus Solid
import CubesSolidIconMenu from '@/ui/assets/icons/menus/gradient/ic_cubes.svelte'


export let name: string = 'cubesGradient'
export let size: string = 'w-6 h-6'

const iconTypes: any = {
  cubesGradient: CubesGradientIconMenu,
  cubesSolid: CubesSolidIconMenu,
}

const Icon = iconTypes[name]

</script>

<div class={size}>
  <Icon size={size} />
</div>
