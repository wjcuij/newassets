<template>
    <div id="add-project">
        <ul>
            <li>
                <van-cell-group>
                    <van-field v-model="list.name" label="项目名称" placeholder="请输入项目名称" :error="errorList.name" />
                </van-cell-group>
            </li>
            <li>
                <van-cell-group>
                    <van-field v-model="list.address" label="项目地址" placeholder="请输入项目地址" :error="errorList.address" />
                </van-cell-group>
            </li>
            <li class="upload">
                <van-cell-group>
                    <p style="text-align:left;font-weight: 800;font-size: 16px;">项目logo</p>
                    <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
                </van-cell-group>
            </li>
            <li><button class="add-btn">增加资产</button></li>
        </ul>
        
    </div>
</template>
<style lang="scss">
    .upload{
        text-align: left;
        padding-left:16px;
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
import { Field, Uploader, Picker, Popup, DatetimePicker,Dialog } from "vant";

Vue.use(Field).use(Uploader).use(Picker).use(Popup).use(DatetimePicker).use(Dialog);
export default {
    data(){
        return{
            fileList:[],
            list:{
                name:'',
                address:'',
                image:''
            },
            errorList:{
                name:false,
                address:false,
                image:false
            }
        }
    },
    methods:{
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        }
    }
};
</script>
