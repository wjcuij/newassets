<template>
    <div id="add-project">
        <ul>
            <li>
                <van-cell-group>
                    <van-field v-model="list.name" label="房间名称" placeholder="请输入房间名称" :error="errorList.name" />
                </van-cell-group>
            </li>
            <li>
                <van-cell-group>
                    <van-field v-model="list.projects_id" label="所属项目id" placeholder="请输入所属项目id" :error="errorList.projects_id" />
                </van-cell-group>
            </li>
            <li>
                <van-cell-group>
                    <van-field v-model="list.house_type" label="房型" placeholder="请输入房型" :error="errorList.house_type" />
                </van-cell-group>
            </li>
            <li>
                <van-cell-group>
                    <van-field v-model="list.ares" label="面积" placeholder="请输入面积" :error="errorList.ares" />
                </van-cell-group>
            </li>
            <li class="upload">
                <van-cell-group>
                    <p style="text-align:left;font-weight: 800;font-size: 16px;">房间logo</p>
                    <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" />
                </van-cell-group>
            </li>
            <li>
                <button class="add-btn">增加资产</button>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
.upload {
  text-align: left;
  padding-left: 16px;
}
.van-field__label {
  font-size: 16px;
  color: #2e2e2e;
  font-weight: 400;
  text-align: left;
}
</style>
<script>
import Vue from "vue";
import { Field, Uploader, Picker, Popup, DatetimePicker } from "vant";

Vue.use(Field)
  .use(Uploader)
  .use(Picker)
  .use(Popup)
  .use(DatetimePicker);
export default {
  data() {
    return {
      fileList: [],
      list: {
        name: "", //房间名称
        projects_id: "", //房间id
        house_type: "", //房型
        ares: "", //面积
        image: "" //图片
      },
      errorList: {
        name: false, //房间名称
        projects_id: false, //房间id
        house_type: false, //房型
        ares: false, //面积
        image: false //图片
      }
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>
