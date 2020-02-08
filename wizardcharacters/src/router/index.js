import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
{
path: '/',
name: 'home',
component: Home
},
{
path: '/about',
name: 'about',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},
{
path: '/wizard/:id',
name: 'wizard',
props: true,
component: () => import(/* webpackChunkName: "WizardView" */ '../views/WizardView.vue')
},
{
  path: '/favorite',
  name: 'favorite',
  component: () => import(/* webpackChunkName: "WizardView" */ '../views/TheFavoriteWizardsView.vue')
  },
{
  path: '/history',
  name: 'history',
  component: () => import('../views/HistoryView.vue'),
  children: [
    {
      path: 'books',
      name: 'books',
      component: () => import('../components/Books.vue')
    },
    {
      path: 'historyelement',
      name: 'historyelement',
      component: () => import('../components/History.vue')
    },
  
  ]
}
]

const router = new VueRouter({
routes
})

export default router