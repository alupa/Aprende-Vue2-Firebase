import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import App from './App.vue'
import {store} from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    const position = {}
    console.log(to)
    if(to.hash){
      position.selector = to.hash
    } else {
      position.x = 200
      position.y = 100
    }
    return position
  },
})

router.beforeEach((to, from, next) => {
  console.log('Acceso global a ruta')
  //next(store.state.auth)
  if(to.meta.privado)
    next(store.state.auth)
  else
    next()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
