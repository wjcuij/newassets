<template>
    <div id="assemble">
        <van-tabs v-model="active" class="assets-tabs">
            <van-tab title="资产汇总">
                <van-collapse v-model="activeNames" accordion>
                    <van-collapse-item name="1">
                        <div slot="title" class="assets-name">
                            <img src="@/assets/140809.jpeg" alt="">
                            <div class="assets-details">
                                <span>资产名称：灰色沙发</span>
                                <span>资产类别：办公用品</span>
                                <span>资产数量：14</span>
                                <span>计量单位：张</span>
                            </div>
                            
                            <!-- <van-icon name="question-o" /> -->
                        </div>
                        内容
                    </van-collapse-item>

                    <van-collapse-item title="标题2" name="2" icon="shop-o">
                        内容
                    </van-collapse-item>
                </van-collapse>
            </van-tab>
            <van-tab title="房间汇总">内容 2</van-tab>
        </van-tabs>
    </div>
</template>
<style>
#assemble{
    background-color:#f5f6f9;
}
.assets-name{
    text-align: left;
    display: flex;
    font-size: 12px;
    color:#727272;
}
.assets-details{
    display: flex;
    flex-direction: column;
}
.assets-name span:nth-child(1){
    font-family:PingFangSC-Medium;
    margin-bottom:8px;
font-size:16px;
color:#2e2e2e;
letter-spacing:0;
text-align:left;
}
.assets-name span{
        display: block;
    line-height: 1.3;
}
.assets-name img{
    width:70px;
    height:70px;
    border-radius: 5px;
    display: inline-block;
    margin-right:20px;
}
/*修改框架样式*/
.van-tab:nth-child(1){
    position: relative;
}
.van-tab:nth-child(1)::after{
    content:'';
    width:1px;
    position: absolute;
    right:0;
    height:28px;
    background:#ccc;
    display: block;
    top:20%;
}
.van-tabs__line {
  background-color: #6088ff !important;
}
.van-tab--active {
  color: #6088ff;
}
.van-cell{
    /* padding-left:0;
    padding-right: 0;
    margin:0 16px; */
    position: relative;
}
.van-cell::before{
    content: '';
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    width: 8px;


    display: block;
    background-color:#628Bfc;
}
/*end*/
</style>
<script>
import Vue from "vue";
import { Collapse, CollapseItem } from "vant";
Vue.use(Collapse).use(CollapseItem);

// import 'vant/lib/button/style';
export default {
  data() {
    return {
      active: 0,
      activeNames: "1"//展开面板的name
    };
  }
};
</script>

