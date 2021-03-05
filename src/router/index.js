import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueCarousel from 'vue-carousel'
// import RoomList from '../components/RoomList.vue'
Vue.use(VueCarousel)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/roomlist',
  //   name: 'RoomList',
  //   component: RoomList
  // },
  // {
  //   path: '/room/:roomId',
  //   name: 'RoomInfo',
  //   component: () => import('@/views/RoomInfo.vue'),
  // },
]

const router = new VueRouter({
  routes
})

export default router
