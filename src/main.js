import 'lib-flexible/flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vant from 'vant'
import 'vant/lib/index.css'

import { DropdownMenu, DropdownItem } from 'vant';//下拉选项

Vue.use(DropdownMenu).use(DropdownItem);
// import './comjs/rem.js'

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  components:{
    App
  },
  template:'<App/>'
})
