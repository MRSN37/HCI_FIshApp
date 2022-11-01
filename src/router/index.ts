import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PagePond from '../views/PondPage.vue'
import MenuBar from '../views/MenuBar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/HomePage'
  },
  {
    path: '/home/',
    component: MenuBar,
    children: [
      {
        path: '',
        redirect: '/home/HomePage'
      },
      {
        path: 'HomePage',
        component : HomePage
      },
      {
        path: 'PondPage',
        component : PagePond
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
