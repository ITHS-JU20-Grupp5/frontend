import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/member',
        name: 'member',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/member.vue')
    },
    {
        path: '/quiz',
        name: 'quiz',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/quiz.vue')
    },
    {
        path: '/result',
        name: 'result',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/result.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
