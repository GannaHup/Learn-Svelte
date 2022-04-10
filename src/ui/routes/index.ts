import Home from '../screen/Home/index.svelte'
import About from '../screen/About/index.svelte'
import Projects from '../screen/Project/index.svelte'

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
