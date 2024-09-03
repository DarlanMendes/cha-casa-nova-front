import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/home.vue'
import Gifts from '../views/gifts/gifts.vue'
import AddGifts from '../views/gifts/add-gifts.vue'



const routes:Array<RouteRecordRaw>  = [
  { path: '/', name:'home',component: Home },
  {path:'/gift', name:'gift',component:Gifts},
  {path:"/newgift", name:'addGifts', component: AddGifts}
]

const router = createRouter({
  history: createWebHistory(),
  routes:routes,
})

export default router