import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about-me',
  //   name: 'AboutMe',
  //   component: AboutMe
  // },
  // {
  //   path: '/hire-me',
  //   name: 'HireMe',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/HireMe.vue')
  // },
  // {
  //   path: '/portfolio',
  //   name: 'Portfolio',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  // },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import(/* webpackChunkName: "about" */ '../views/Confirm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent() {
//       return routes[this.currentRoute] || NotFound
//     }
//   },
//   render(h) { return h(this.ViewComponent) }
// })


export default router
