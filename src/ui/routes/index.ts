import MainLayout from '@/ui/layout/Main/index.svelte'
import Home from '@/ui/screen/Home/index.svelte'
import About from '@/ui/screen/About/index.svelte'
import Projects from '@/ui/screen/Project/index.svelte'

const routes = [
  {
    name: '/',
    component: Home,
    layout: MainLayout
  },
  {
    name: 'about',
    component: About,
    layout: MainLayout
  },
  {
    name: 'projects',
    component: Projects,
    layout: MainLayout
  },
]

export { routes }
