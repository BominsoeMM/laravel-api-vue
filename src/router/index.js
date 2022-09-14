import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import store from "@/store";
import ProductCreateView from "@/views/ProductCreateView";
import ProductView from "@/views/ProductView";
import ProductEditView from "@/views/ProductEditView";

function Authorized(to, from, next) {
    if (store.state.auth && store.state.token) {
        return next("/dashboard")
    }
    return next()
}

function NotAuthorized(to, from, next) {
    if (store.state.auth === null) {
        return next("/login")
    }
    return next()
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }, {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue'),
        beforeEnter: [Authorized]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
        beforeEnter: [Authorized]
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/DashboardView.vue'),
        beforeEnter: [NotAuthorized],
    },
    {
        path: '/product/create',
        name: 'product.create',
        component: ProductCreateView,
        beforeEnter: [NotAuthorized],
    },
    {
        path: '/product/edit/:id',
        name: 'product.edit',
        component: ProductEditView,
        beforeEnter: [NotAuthorized],
    },
    {
        path: '/products',
        name: 'products',
        component: ProductView,
        beforeEnter: [NotAuthorized],
    },

]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
