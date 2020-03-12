<template>
    <div class="login-box">
        <p>密码登录</p>
        <div class="field">
            <label for="userName">
                <img src="~@/static/img/login/user-icon.png">
            </label>
            <input type="text" name="userName" placeholder="会员名/邮箱/手机号" v-model="userName">
            <img @click="userName=''" class="cancel-icon" src="~@/static/img/login/cancel.png" v-show="userName">
        </div>
        <div class="field">
            <label for="cipher">
                <img src="~@/static/img/login/lock.png">
            </label>
            <input type="password" name="cipher" v-model="password">
            <img @click="password=''" class="cancel-icon" src="~@/static/img/login/cancel.png" v-show="password">
        </div>
        <div class="commit-btn">登 录</div>
        <div class="more-info">
            <span>免费注册</span>
            <span>忘记密码</span>
        </div>
    </div>
</template>

<script src="./login.js"></script>

<style lang="scss">
@import "./login.scss";
</style>
