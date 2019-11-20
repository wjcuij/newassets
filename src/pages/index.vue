<template>
    <div id="index">
        <ul class="nav-list">
            <li>
                <van-icon name="scan" />
            </li>
            <li>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="dropdownVal" :options="option1" :title="option1[dropdownVal].text" />
                </van-dropdown-menu>
            </li>
            <li>
                <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
                    <div slot="action" @click="onSearch" class="search">搜索</div>
                </van-search>
            </li>
            <li>
                <router-link to="/"><img src="@/assets/icon-img/user.png" alt="" style="width:40px;height:40px;"></router-link>
            </li>
        </ul>
        <ul class="project">
            <li>
                <router-link to="/assemble" tag="div" class="details">
                    <span>IMP环球都会广场</span>
                    <span>广州市天河区珠江新城花城大道68号</span>
                    <span>
                        物品数量
                    </span>
                    <b>39</b>
                </router-link>
                <img src="@/assets/imp-logo.png" alt="">
            </li>
            <li>
                <div class="details">
                    <span>青云居</span>
                    <span>广州市天河区冼村复建房</span>
                    <span>
                        物品数量
                    </span>
                    <b>39</b>
                </div>
                <img src="@/assets/qyj-logo.png" alt="">
            </li>
            <li>
                <div class="details">
                    <span>寓+公寓</span>
                    <span>广州市天河区珠江新城花城大道68号</span>
                    <span>
                        物品数量
                    </span>
                    <b>39</b>
                </div>
                <img src="@/assets/yj-logo.png" alt="">
            </li>
            <li>
                <div class="details">
                    <span>仓库</span>
                    <span>广州市天河区珠江新城环球都会广场</span>
                    <span>
                        物品数量
                    </span>
                    <b>39</b>
                </div>
                <img src="@/assets/ck-logo.png" alt="">
            </li>
            <li>
                <div class="details">
                    <span>报废</span>
                    <span>广州市天河区珠江新城花城大道68号</span>
                    <span>
                        物品数量
                    </span>
                    <b>39</b>
                </div>
                <img src="@/assets/bf-logo.png" alt="">
            </li>
        </ul>
        <button class="add-btn" @click="show = !show">增加项目</button>
        <van-popup v-model="show" position="bottom" class="popup" closeable
  close-icon-position="bottom-left" close-icon="close">
            <router-link to="/add" tag="div">增加资产</router-link>
            <router-link to="/add/room" tag="div">增加房间</router-link>
            <router-link to="/add/project" tag="div">增加项目</router-link>
        </van-popup>
    </div>
</template>
<style lang="scss">
#index {
  padding: 0 12px;
  font-family: PingFangSC-Medium;
  .nav-list {
    display: flex;
    align-items: center;
  }


.nav-list li:nth-child(1) i {
  display: block;
}
.nav-list li:nth-child(1) {
  font-size: 40px;
}
.nav-list li:nth-child(2) select {
  border: none;
  display: inline-block;
  outline: none;
  text-align: right;
  background: transparent;
}
.nav-list li:nth-child(3) {
  flex: 2;
}
.nav-list li:nth-child(4) {
  font-size: 20px;
}
.search {
  width: 50px;
}
.van-search__action {
  padding: 0 8px;
  color: #323233;
  font-size: 14px;
  background: #337df7;
  line-height: 34px;
  color: #fff;
  margin-right: 10px;
}
.van-ellipsis {
  color: #3179f6;
}
.details {
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #fff;
}
.project {
  /* background:#5cc6fa; */
}
.project .details span:nth-child(1) {
  font-size: 18px;
  color: #fff;
}
.project li {
  border-radius: 10px;
}
.project li:nth-child(1) {
  background: #5cc6fa;
}
.project li:nth-child(2) {
  background: #61d195;
}
.project li:nth-child(3) {
  background-image: -webkit-linear-gradient(0deg, #c557d3, #9a6ce5, #8674ec);
}
.project li:nth-child(4) {
  background-image: -webkit-linear-gradient(0deg, #fdb560, #f59e5b, #ee8557);
}
.project li:nth-child(5) {
  background-image: -webkit-linear-gradient(0deg, #fde15f, #f6cb56, #eeb04c);
}
.project li {
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  margin: 20px 0;
}
.details b {
  font-size: 20px;
}
.project li img {
  position: relative;
  top: -20px;
  box-shadow: 5px 6px 15px 1px;
  border-radius: 100%;
  width: 90px;
  height: 90px;
}
.add-btn {
  width: 100%;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  height: 50px;
  margin: 20px 0;
  background-image: -webkit-linear-gradient(0deg, #7be0f4, #6be6f8, #628bfb);
}
/*弹出窗样式*/
.popup{
    height:20%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-bottom:10%;
    background:transparent;
}
.popup div{
    background-image:-webkit-linear-gradient(0deg, #0095ec, #f86b6b, #9562fb);
    font-size: 20px;
    color: #fff;
    padding: 6px 0;
    // margin-bottom: 5px;
    border-radius: 10px;
    width: 300px;
    margin:0 auto 15px;
        }
.van-popup__close-icon--bottom-left{
        bottom:10%;
        left: 0;
        right: 0;
    }
}
</style>

<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  name: "App",
  data() {
    return {
      show: false,
      option1: [
        //选项
        { text: "房号", value: 0 },
        { text: "资产", value: 1 },
        { text: "项目", value: 2 }
      ],
      dropdownVal: "0", //搜索值
      value: "值"
    };
  },
  methods: {
    onSearch: function() {
      // alert(1)
    }
  },
  created () {
    document.title = '功能授权'
  }
};
</script>
