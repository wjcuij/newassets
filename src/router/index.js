import Vue from 'vue'
import Router from 'vue-router'

const routerDefault = [{
    path:'/',
    name:'index',
    component:() =>import('@/pages/index')
},{
    path:'/login',
    name:'login',
    component:() =>import('@/pages/login')
},{
    path:'/assemble',
    name:'assemble',
    component:() =>import('@/pages/assemble')
}]
Vue.use(Router)
const mainRouter = new Router({
    mode:'history',
    routes:[
...routerDefault
    ]
})
export default mainRouter