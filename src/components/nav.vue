<template>
  <div class="banner">
    <van-nav-bar
  :title=title
  left-text="返回"
  right-text=""
  left-arrow
  @click-left="onClickLeft"
/>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar)
export default {
  name: '',
  props: {
    title:{
      default:'标题',
      type:String
    },
    msg: String
  },
  data(){
    return{
      

    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);
      this.$toast('返回')
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
