<template>
    <div>
        <nav-slot :title="title"></nav-slot>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">

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

