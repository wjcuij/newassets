import Vue from 'vue'
import Router from 'vue-router'

import addAssets from '@/pages/add/add-assets'
import addRoom from '@/pages/add/add-room'
import addProject from '@/pages/add/add-project'
const routerDefault = [{
    path:'/',
    name:'index',
    component:() =>import('@/pages/index'),
    meta:{
        title:'首页'
    }
},{
    path:'/login',
    name:'login',
    component:() =>import('@/pages/login'),
    meta:{
        title:'页面登录'
    }
},{
    path:'/assemble',
    name:'assemble',
    component:() =>import('@/pages/assemble'),
    meta:{
        title:'资产汇总'
    }
},{
    path:'/assemble/detail',
    name:'assemble-detail',
    component:() =>import('@/pages/assemble-detail'),
    meta:{
        title:'资产汇总详情'
    }
},{
    path:'/amend-record',
    name:'amend-record',
    component:()=>import('@/pages/amend-record'),
    meta:{
        title:'资产修改记录'
    }
},{
    path:'/add',
    // name:'add',
    component:()=>import('@/pages/add/'),
    meta:{
        title:'添加资产'
    },
    children:[
        {
            path:'',
            component:addAssets,
            meta:{
                title:'添加资产'
            }
        },{
            path:'room',
            component:addRoom,
            meta:{
                title:'添加房间'
            }
        },{
            path:'project',
            component:addProject,
            meta:{
                title:'添加项目'
            }
        }
    ]
}]

Vue.use(Router)

const mainRouter = new Router({
    mode:'history',
    routes:[
...routerDefault
    ]
})
mainRouter.beforeEach((to,from,next) =>{
    // console.log(to)
    /**路由改变页面标题 */
    if(to.meta.title){
        document.title = to.meta.title
        next()
    }
})
export default mainRouter