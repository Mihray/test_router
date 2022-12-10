import { createRouter, createWebHashHistory } from "vue-router";
import HomeVue from './components/HomeVue'
import LoginVue from './components/LoginVue'
import NotFound from './components/NotFound'
import HelloWorld from './components/HelloWorld'


const routes = [
    {path: '/home', component: HomeVue, 
    children: [
        { path: '/hello', component: HelloWorld},
        { path: '/404', component: NotFound},
    ]
},
    { path: '/login', component: LoginVue}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router