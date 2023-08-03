import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PublicationView from '../views/PublicationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: to => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return { path: '/uz', query: { q: to.params.lan } }
      },
    },  
    {
      path: '/:lan',
      name: 'home',
      component: HomeView
    },

    { 
      path: '/:lan/publication',
      name: 'publication',
      component: PublicationView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
