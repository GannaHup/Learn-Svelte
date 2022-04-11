import Home from '@/ui/screen/Home/index.svelte'
import About from '@/ui/screen/About/index.svelte'
import Projects from '@/ui/screen/Project/index.svelte'

const routes = [
  {
    name: '/',
    component: Home,
  },
  {
    name: 'about',
    component: About,
  },
  {
    name: 'projects',
    component: Projects,
  },
]

export { routes }
