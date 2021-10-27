import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Cadastro from '../components/Cadastro.vue'
import Login from '../components/Login.vue'
Vue.use(Router)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home

    },
    {
        name: 'Cadastro',
        path: '/cadastro',
        component: Cadastro

    },
    {
        name: 'Login',
        path: '/login',
        component: Login

    }
   

]
const router = new Router({ routes });
export default router