<template>
    <div>
        <nav-slot title="修改记录"></nav-slot>
        <div>
            <van-steps direction="vertical" active-color="#628bfc" :active="100">
                <van-step>
                    <h3>盘点时间：2016-07-18 12:40</h3>
                    <p>台灯物品已报废</p>
                </van-step>
                <van-step>
                    <h3>盘点时间：2016-07-12 12:40</h3>
                    <p>台灯物品损坏已审批保修</p>
                </van-step>
            
            </van-steps>
        </div>
    </div>
</template>
<style lang="scss">
    .van-step--finish .van-step__circle, .van-step--finish .van-step__line{
        background-color:#628bfc;
    }
</style>
<script>
//导航标题
import navSlot from "@/components/nav.vue";
import Vue from "vue";
import { Step, Steps } from "vant";

Vue.use(Step).use(Steps);
export default {
  name: "amend",
  components: {
    navSlot
  },
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      this.$toast("返回");
    }
  }
};
</script>
