import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Picker from '@/components/Picker.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Picker',
    name: 'Picker',
    component: Picker
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
