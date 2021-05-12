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
    {
        path: "/contacts",
        name: "Contacts",
        component: () => import('@/views/Contacts'),
    },
    {
        path: "/why-us",
        name: "Why us",
        component: () => import('@/views/WhyUs'),
    },
    {
        path: "/planet/:id",
        name: "Planet",
        component: () => import('@/views/Planet'),
        props: true
    },
    {
        path: "/place/:planetId/:index",
        name: "Place",
        component: () => import('@/views/Place'),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
