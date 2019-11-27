<template>
  <div id="add-assets">
    <ul>
      <li>
        <van-cell-group>
          <van-field v-model="list.code" label="资产编码" placeholder="请输入资产编码" :error="errorList.code" /></van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field readonly clickable label="资产类别" :value="list.c_id" placeholder="选择资产类别 >" :error="errorList.c_id" @click="(showPicker = true,showPickerItem = 0)" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field v-model="list.model" label="规格型号" placeholder="请输入规格型号" :error="errorList.model" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field v-model="list.unit" label="计量单位" placeholder="请输入计量单位" :error="errorList.unit" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field v-model="list.sn" label="SN号" placeholder="请输入SN号" :error="errorList.sn" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field v-model="list.money" label="金额" placeholder="请输入金额" :error="errorList.money" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field readonly clickable label="存放项目" :value="list.p_id" placeholder="选择存放项目 >" @click="(showPicker = true,showPickerItem = 1)" :error="errorList.p_id" />

        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field readonly clickable label="存放地点" :value="list.r_id" placeholder="选择存放地点 >" @click="(showPicker = true,showPickerItem = 2)" :error="errorList.r_id" />
        </van-cell-group>
      </li>

      <li>
        <van-cell-group>
          <van-field readonly clickable label="购入日期" :value="list.buy_time" placeholder="选择购入日期 >" @click="(showPicker = true,showPickerItem = 3)" :error="errorList.buy_time" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field v-model="list.user" label="使用人" placeholder="请输入使用人" :error="errorList.user" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field v-model="list.supplier" label="供应商" placeholder="请输入供应商" :error="errorList.supplier" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field v-model="list.source" label="来源" placeholder="请输入来源" :error="showPicker.source" />
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <!-- <van-field v-model="list.remark" rows="1" autosize label="备注" type="textarea" placeholder="请输入备注" :error="errorList.remark" /> -->

  <van-field
    v-model="message"
    rows="2"
    autosize
    label="备注"
    type="textarea"
    
    placeholder="请输入备注"
    show-word-limit
  />

        </van-cell-group>
      </li>
      <li class="upload">
        <p style="text-align:left;font-weight: 800;font-size: 16px;">上传图片</p>
        <!-- <van-uploader :after-read="afterRead" /> -->
        <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
      </li>

    </ul>
    <button class="add-btn">增加资产</button>
    <!--选择项弹出层-->
    <van-popup v-model="showPicker" position="bottom">

      <!--时间选择-->
      <van-datetime-picker v-model="currentDate" v-if="showPickerItem == 3" type="date" :min-date="minDate" @confirm="onConfirm" />
      
      <!--选择项-->
      <van-picker show-toolbar :columns="columns[showPickerItem]" v-else @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
    <van-popup v-model="showDatePicker" position="bottom">
      
    </van-popup>
    
  </div>
</template>
<style lang="scss">
#add-assets {
  .upload{
    text-align: left;
    padding-left:16px;
  }
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
  /*修改资产样式*/
  .van-field--error .van-field__control {
    color: #6088ff !important;
    -webkit-text-fill-color: #6088ff;
    font-size: 16px;
  }
  .van-field__control {
    color: #6088ff !important;
    text-align: right;
  }
  .van-field__label {
    font-size: 16px;
    color: #2e2e2e;
    font-weight: 400;
    text-align: left;
  }
  input::-webkit-input-placeholder {
    color: #ccc;
  }
  input:-moz-placeholder {
    /* Firefox 18- */
    color: #ccc;
  }
  input::-moz-placeholder {
    /* Firefox 19+ */
    color: #ccc;
  }
  input:-ms-input-placeholder {
    color: #ccc;
  }
  .van-uploader__upload{
    border-style: dotted;
  }
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
      minDate: new Date(2012),//最少日期
      currentDate: new Date(),
      username: "",
      message: "",
      fileList: [],//图片列表
      value: "",
      showPicker: false,//选择项弹出层
      showPickerItem:0,//弹出哪个层
      showDatePicker:false,//时间选择弹出层
      list:{//资产列表
        code:'',//资产编码
        c_id:'',//资产分类id
        name:'',//资产名称
        model:'',//规格型号
        unit:'',//单位
        sn:'',//sn号
        money:'',//金额
        p_id:'',//项目id
        r_id:'',//房间id
        buy_time:'',//购买时间
        user:'',//使用人
        supplier:'',//供应商
        source:'',//来源
        image:'',//图片
        remark:''//描述
      },
      errorList:{//错误提示列表
        code:false,//资产编码
        c_id:false,//资产分类id
        name:false,//资产名称
        model:false,//规格型号
        unit:false,//单位
        sn:false,//sn号
        money:false,//金额
        p_id:false,//项目id
        r_id:false,//房间id
        buy_time:false,//购买时间
        user:false,//使用人
        supplier:false,//供应商
        source:false,//来源
        image:false,//图片
        remark:false//描述
      },
      columns: [
        [
          "家具用具及其他类",
          "图书文物及陈列品",
          "文艺体育设备",
          "仪器仪表、计量标准器具及量具、衡器",
          "电子产品及通信设备",
          "电气设备",
          "交通运输设备",
          "专用设备",
          "通用设备",
          "土地、房屋及建筑物"
        ],[
          "IMP",
          "寓加",
          "潭村住宅",
          "青云居"
        ],[
          "IMP",
          "寓加",
          "潭村住宅",
          "青云居"
        ],[
          "IMP",
          "寓加",
          "潭村住宅",
          "青云居"
        ]
      ],sourceList:[
        {
          item:1,
          name:'购入'   
        },
        {
          item:2,
          name:'租赁'   
        },{
          item:3,
          name:'自建'   
        },{
          item:4,
          name:'赠送'   
        },{
          item:4,
          name:'其他'   
        }
      
       
      ]
    };
  },
  methods: {
    onConfirm(value) {
      if(this.showPickerItem == 0){//选择资产类别
        this.list['c_id'] = value
      }else if(this.showPickerItem == 1){//项目选择
        this.list['p_id'] = value
      }else if(this.showPickerItem == 2){//房间
        this.list['r_id'] = value
      }else{//时间选择
        var d = new Date(value);
            d=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
            this.list['buy_time'] = d
            this.showPicker = false
        // this.list['buy_time'] = value
      }
      // this.value = value;
      this.showPicker = false;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  },
  onload() {
    document.title = "新增资产1";
  }
};
</script>

