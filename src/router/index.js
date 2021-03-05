import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room/:roomId',
    name: 'RoomInfo',
    component: () => import('@/views/RoomInfo.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
