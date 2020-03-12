<template>
    <div class="registry-box">
        <p>
            账号注册
            <span class="sendVerify">发送验证码</span>
        </p>
        <!-- <div class="sendVerify"></div> -->
        <div class="field">
            <label for="phoneNumber">
                <img src="~@/static/img/login/phone.png">
            </label>
            <input type="text" name="phoneNumber" placeholder="请输入手机号" v-model="phoneNumber">
            <img @click="phoneNumber=''" class="cancel-icon" src="~@/static/img/login/cancel.png" v-show="phoneNumber">
        </div>
        <dir class="field"><label for="verify">
                <img src="~@/static/img/login/verify.png">
            </label>
            <input type="text" name="verify" placeholder="请输入验证码" v-model="verify">
            <img @click="verify=''" class="cancel-icon" src="~@/static/img/login/cancel.png" v-show="verify">
        </dir>
        <div class="field">
            <label for="cipher">
                <img src="~@/static/img/login/lock.png">
            </label>
            <input type="password" name="cipher" placeholder="请输入密码" v-model="password">
            <img @click="password=''" class="cancel-icon" src="~@/static/img/login/cancel.png" v-show="password">
        </div>
        <div class="field">
            <label for="confirmPassword">
                <img src="~@/static/img/login/confirmPassword.png">
            </label>
            <input type="confirmPassword" name="confirmPassword" placeholder="请确认密码" v-model="confirmPassword">
            <img @click="confirmPassword=''" class="cancel-icon" src="~@/static/img/login/cancel.png"
                v-show="confirmPassword">
        </div>
        <div class="commit-btn">注 册</div>
        <div class="more-info">
            <span>邮箱注册</span>
            <span>普通注册</span>
        </div>
    </div>
</template>

<script src="./registry.js"></script>

<style lang="scss">
@import "./registry.scss";
</style>
