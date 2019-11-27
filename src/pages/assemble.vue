<template>
    <div id="assemble">
        <van-tabs v-model="active" class="assets-tabs">
            <van-tab title="资产汇总">
                <router-link to="/assemble/detail" tag="div" class="assets-name assets-cell">
                    <img src="@/assets/140809.jpeg" alt="">
                    <div class="assets-details">
                        <span>资产名称：灰色沙发</span>
                        <span>资产类别：办公用品</span>
                        <span>资产数量：114</span>
                        <span>计量单位：张</span>
                    </div>
                </router-link>
                <router-link to="/assemble/detail" tag="div" class="assets-name assets-cell">
                    <img src="@/assets/140809.jpeg" alt="">
                    <div class="assets-details">
                        <span>资产名称：灰色沙发</span>
                        <span>资产类别：办公用品</span>
                        <span>资产数量：114</span>
                        <span>计量单位：张</span>
                    </div>
                </router-link>
            </van-tab>
            <van-tab title="房间汇总">
                <div style="padding:0 10px;">
                    <router-link to="/assemble/detail" tag="div" class="room">
                            <div class="room-detail">
                                <img src="@/assets/140809.jpeg" alt="">
                                <div class="room-txt">
                                    <span>青云居B栋508</span>
                                    <div class="room-describe">
                                        <span>房型：<br><b>二房一厅</b></span>
                                        <span>资产数量：<br><b>10</b></span>
                                        <span>面积：<br><b>120m²</b></span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/assemble/detail" tag="div" class="room">
                            <div class="room-detail">
                                <img src="@/assets/140809.jpeg" alt="">
                                <div class="room-txt">
                                    <span>青云居B栋508</span>
                                    <div class="room-describe">
                                        <span>房型：<br><b>二房一厅</b></span>
                                        <span>资产数量：<br><b>10</b></span>
                                        <span>面积：<br><b>120m²</b></span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<style lang="scss">
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
/*房间汇总*/
.room{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
       text-align: left;
    color:#727272;
    flex-direction: column;
    border-radius: 10px;
    margin:5px 0;
img{
    width:70px;
    height:70px;
    border-radius: 5px;
    display: inline-block;
    margin-right:20px;
}
.room-describe{
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 12px;
}
.room-describe b{
    font-size: 14px;
}
.room-detail{
    display: flex;
    margin:5px 0;
}
.room-txt{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.room-txt>span{
    color:#2e2e2e;
    font-size:16px;
    
}
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
.assets-cell{
    /* padding-left:0;
    padding-right: 0;
    margin:0 16px; */
    position: relative;
    background:#fff;
    padding:10px 16px;
    margin-top:5px;
}
.assets-cell::before{
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

