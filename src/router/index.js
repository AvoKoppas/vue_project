import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Bank from "@/views/Bank";
import List from "@/views/List";
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/bank',
        name: 'Bank',
        component: Bank
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: '/list',
        name: 'List',
        component: List
    },
    {
        path: '/Login',
        name: 'LOGIN',
        component: Login
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    },


]

const router = new VueRouter({
    routes
})

export default router
