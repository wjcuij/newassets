<template>
    <div>
        <nav-slot :title="title"></nav-slot>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
  .add-btn {
    width: 89%;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    height: 50px;
    margin: 20px 0;
    background-image: -webkit-linear-gradient(0deg, #7be0f4, #6be6f8, #628bfb);
  }
</style>
<script>
import navSlot from '@/components/nav.vue';
export default {
    components:{
        navSlot
    },
    props:{
        title:{
            default:'新增资产'
        }
    },
    data(){
        return{

        }
    }
}
</script>

