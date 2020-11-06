import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Producto from '../components/Producto.vue'
import Pedido from '../components/Pedido.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/producto',
        name: 'producto',
        component: Producto
    },
    {
        path: '/pedido',
        name: 'pedido',
        component: Pedido
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router