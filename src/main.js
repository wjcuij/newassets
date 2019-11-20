import 'lib-flexible/flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import Vant from 'vant'
import 'vant/lib/index.css'

import { DropdownMenu, DropdownItem,Icon,Button,Search,Tabs,Tab,Toast } from 'vant';//下拉选项
// import { Icon } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem).use(Icon).use(Button).use(Search).use(Tab).use(Tabs).use(Toast);
// import './comjs/rem.js'

// Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  components:{
    App
  },
  template:'<App/>'
})
