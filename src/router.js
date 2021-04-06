import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/views/Home'),
    },
    {
        path: "/about",
        name: "About",
        component: () => import('@/views/About'),
    },
    {
        path: "/tours",
        name: "Tours",
        component: () => import('@/views/Tours'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router