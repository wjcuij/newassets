<template>
    <div class="content">
        <div class="account">
            <span style="">
                 <img src="@/assets/icon-img/suotou.png" alt="">账号：
                 
            </span><br> 
            <input type="text">
        </div>
        <div class="account">
            <span style="display:inline-block;">
                 <img src="@/assets/icon-img/suotou.png" alt="">密码：
            </span><br> 
            <input type="text">
        </div>
        <router-link to="/" style="display:block;text-align:right;color:#ccc;">忘记密码</router-link><br>
            <van-button to="/" class="login-btn" type="info">登陆</van-button>
    </div>
</template>
<style>
.account{
    font-size:17px;
}
.content{
    padding:62px 44px 0;
    text-align: left;
}
.content .account{
    margin-bottom:28px;
}
.account>span{
    display:inline-block;
    margin-bottom: 12px;
}
.account img{
    display: inline-block;
    vertical-align: sub;
    margin-right:11px;
}
.account input{
    width: 100%;
    border:none;
    border:1px solid #367df3;
    border-radius: 4px;
}
.login-btn{
    width:200px;margin:0 auto;display:block;
    border-radius: 10px;
}
</style>
