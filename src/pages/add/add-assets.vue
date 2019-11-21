<template>
    <div id="add-assets">
        <ul>
            <li><van-cell-group>
  <van-field
    v-model="username"
    label="资产编码"
    placeholder="请输入资产编码"
    error
  /></van-cell-group></li>
            <li><van-cell-group>
  <van-field
  readonly
  clickable
  label="资产类别"
  :value="value"
  placeholder="选择城市 >"
  @click="showPicker = true" />

</van-cell-group></li>
            <li><van-cell-group>
  <van-field
    v-model="username"
    label="规格型号"
    placeholder="请输入规格型号"
    error
  />
  </van-cell-group></li>
            <li><van-cell-group>
  <van-field
    v-model="username"
    label="计量单位"
    placeholder="请输入计量单位"
    error
  />
  </van-cell-group></li>
            <li><van-cell-group>
  <van-field
    v-model="username"
    label="SN号"
    placeholder="请输入SN号"
    error
  />
  </van-cell-group></li>
            <li><van-cell-group>
  <van-field
    v-model="username"
    label="金额"
    placeholder="请输入金额"
    error
  />
  </van-cell-group></li>
                        <li><van-cell-group>
  <van-field
  readonly
  clickable
  label="存放项目"
  :value="value"
  placeholder="选择存放项目 >"
  @click="showPicker = true" />

</van-cell-group></li>
<li><van-cell-group>
  <van-field readonly
  clickable
  label="存放地点"
  :value="value"
  placeholder="选择存放地点 >"
  @click="showPicker = true" />
</van-cell-group></li>
            
            <li>
              <van-cell-group>
                <van-field readonly
                clickable
                label="存放地点"
                :value="value"
                placeholder="选择存放地点 >"
                @click="showPicker = true" />
              </van-cell-group>
            </li>
            <li><van-cell-group>
  <van-field
    v-model="username"
    label="使用人"
    placeholder="请输入使用人"
    error
  />
  </van-cell-group></li>
            <li><van-cell-group>
  <van-field
    v-model="username"
    label="供应商"
    placeholder="请输入供应商"
    error
  />
  </van-cell-group></li>
            <li><van-cell-group>
  <van-field
    v-model="username"
    label="来源"
    placeholder="请输入来源"
    error
  />
  </van-cell-group></li>
            <li><van-cell-group>
  <van-field
    v-model="message"
    rows="1"
    autosize
    label="备注"
    type="textarea"
    placeholder="请输入备注"
  />
</van-cell-group>
            </li>
            <li>
            <van-uploader :after-read="afterRead" />
                <span>上传图片</span>
                
            </li>
        </ul>
        <van-popup v-model="showPicker" position="bottom">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
<van-datetime-picker
  v-model="currentDate"
  type="date"
  :min-date="minDate"
/>
    </div>
</template>
<style lang="scss">
#add-assets{

/*修改资产样式*/
  .van-field--error .van-field__control{
    color:#6088ff !important;
    -webkit-text-fill-color:#6088ff;
    font-size:16px;
  }
  .van-field__control{
    color:#6088ff !important;
    text-align:right;
  }
  .van-field__label{
    font-size: 16px;
    color: #2e2e2e;
    font-weight: 400;
    text-align:left;
  }
}
</style>
<script>
import Vue from 'vue';
import { Field,Uploader,Picker,Popup,DatetimePicker } from 'vant';

Vue.use(Field).use(Uploader).use(Picker).use(Popup).use(DatetimePicker);
export default {
    data(){
        return{
          minDate: new Date(2012),
            currentDate: new Date(),
            username:'',
            message:'',
            value: '',
            showPicker: false,
            columns: ['家具用具及其他类', '图书文物及陈列品', '文艺体育设备', '仪器仪表、计量标准器具及量具、衡器', '电子产品及通信设备','电气设备','交通运输设备','专用设备','通用设备','土地、房屋及建筑物']
        }
    },
    methods:{
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      }
    },
    onload(){
        document.title = '新增资产1'
    }
}
</script>

