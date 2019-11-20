<template>
    <div id="assemble-detail">
    <van-nav-bar title="资产详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
        <!-- <van-tabs v-model="active" class="assets-tabs">
            <van-tab title="资产汇总"> -->
                <van-collapse v-model="activeNames" accordion>
<!--折叠标题-->                    
                    <van-collapse-item name="1">
                        <div slot="title" class="assets-name">
                            <div class="assets-txt">
                                <img src="@/assets/140809.jpeg" alt="">
                                <div class="assets-details">
                                    <span>资产名称：灰色沙发</span>
                                    <span>资产条码：IMP123123</span>
                                    <span>资产数量：1</span>
                                    <span>计量单位：张</span>
                                </div>
                            </div>
                            <div class="assets-icon">
                                <router-link to="/amend-record" tag="div">
                                    <van-icon name="records" size="26px" color="#6088ff" style="vertical-align:bottom;"/>
                                    修改记录
                                </router-link>
                                <router-link to="/assemble" tag="div">
                                    <van-icon name="points" size="26px" color="#6088ff" style="vertical-align:bottom;"/>
                                    修改资产
                                </router-link>
                            </div>
                            <!-- <van-icon name="question-o" /> -->
                        </div>
                        <div>
                            <div>
                                <ul class="detail-list">
                                    <li>规格型号：<span>200mx80m</span></li>
                                    <li>SN号：<span>IMP123123</span></li>
                                    <li>资产类别：<span>办公用品</span></li>
                                    <li>金额：<span>¥2000</span></li>
                                    <li>存放项目：<span>青云居</span></li>
                                    <li>存放地点：<span>冼村2期</span></li>
                                    <li>购入日期：<span>2019.10.25</span></li>
                                    <li>使用人：<span></span></li>
                                    <li>供应商：<span>唯一家具</span></li>
                                    <li>来源：<span>自行购买</span></li>
                                    <li>备注：<span></span></li>
                                </ul>
                            </div>
                        </div>
                        
                    </van-collapse-item>
<van-collapse-item name="2">
                        <div slot="title" class="assets-name">
                            <div class="assets-txt">
                                <img src="@/assets/140809.jpeg" alt="">
                                <div class="assets-details">
                                    <span>资产名称：灰色沙发</span>
                                    <span>资产条码：IMP123123</span>
                                    <span>资产数量：1</span>
                                    <span>计量单位：张</span>
                                </div>
                            </div>
                            <div class="assets-icon">
                                <router-link to="/assemble" tag="div">
                                    <van-icon name="records" size="26px" color="#6088ff" style="vertical-align:bottom;"/>
                                    修改记录
                                </router-link>
                                <router-link to="/assemble" tag="div">
                                    <van-icon name="points" size="26px" color="#6088ff" style="vertical-align:bottom;"/>
                                    修改资产
                                </router-link>
                            </div>
                            <!-- <van-icon name="question-o" /> -->
                        </div>
                        <div>
                            <div>
                                <ul class="detail-list">
                                    <li>规格型号：<span>200mx80m</span></li>
                                    <li>SN号：<span>IMP123123</span></li>
                                    <li>资产类别：<span>办公用品</span></li>
                                    <li>金额：<span>¥2000</span></li>
                                    <li>存放项目：<span>青云居</span></li>
                                    <li>存放地点：<span>冼村2期</span></li>
                                    <li>购入日期：<span>2019.10.25</span></li>
                                    <li>使用人：<span></span></li>
                                    <li>供应商：<span>唯一家具</span></li>
                                    <li>来源：<span>自行购买</span></li>
                                    <li>备注：<span></span></li>
                                </ul>
                            </div>
                        </div>
                        
                    </van-collapse-item>
                </van-collapse>
            <!-- </van-tab> -->
<!--房间汇总-->            
            <!-- <van-tab title="房间汇总">
                <div style="padding:0 10px;">
                    <div class="room">
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
                        </div>
                        <div class="room">
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
                        </div>
                </div>
            </van-tab>
        </van-tabs> -->
    </div>
</template>
<style lang="scss">
body{
    background: #f5f6f9;
}
#assemble-detail{
    background-color:#f5f6f9;

.assets-name{
    text-align: left;
    display: flex;
    font-size: 12px;
    color:#727272;
    flex-direction: column;
}
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
.assets-txt{
    display:flex;
    flex-direction: row;
    
}
.detail-list{
    text-align: left;
    padding-left:10px;
    font-size: 14px;
}
.detail-list li span{
    color:#000;
}
.assets-icon{
    display: flex;
    font-size: 16px;
    color:#6088ff;
    justify-content:space-around;
    padding-top: 3px;
    border-top: 1px solid #ccc;
    position: relative;
}
.assets-icon::before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left:-16px;
    width: 0.21333rem;
    display: block;
    background-color: #fff;
    height: 39px;
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
.assets-icon>div{
    flex:1;
    text-align: center;
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
.assets-name img,.room img{
    width:70px;
    height:70px;
    border-radius: 5px;
    display: inline-block;
    margin-right:20px;
}
.van-collapse-item{
    /* margin-bottom:10px; */
}
/*修改框架样式*/
.van-tab:nth-child(1),.assets-icon>div:nth-child(1){
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

.assets-icon>div:nth-child(1)::after{
    content:'';
    width:1px;
    position: absolute;
    right:0;
    height:28px;
    background:#ccc;
    display: block;
    top:0;
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
    margin:5px 0 0px;
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
.van-cell__right-icon{
    position: absolute;
    top:16px;
    right: 16px;
}
}
/*end*/
</style>
<script>
import Vue from "vue";
import { Collapse, CollapseItem,NavBar } from "vant";
Vue.use(Collapse).use(CollapseItem).use(NavBar);

// import 'vant/lib/button/style';
export default {
  data() {
    return {
      active: 0,
      activeNames: "2"//展开面板的name
    }
  },methods:{
    onClickLeft() {
        this.$router.go(-1)
        this.$toast.setDefaultOptions({ duration: 500 });
      this.$toast('返回');
    },
  }
};
</script>

