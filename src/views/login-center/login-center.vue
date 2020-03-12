<template>
    <div class="login">
        <div class="default-container top">
            <a href="">
                <img src="~@/static/img/public/logo-top.png" height="48px">
            </a>
        </div>
        <main>
            <div class="default-container">
                <img src="https://img.alicdn.com/tfs/TB1Psi.xbH1gK0jSZFwXXc7aXXa-1190-600.jpg">
                <login v-if="isLogin"></login>
                <registry v-else></registry>
            </div>
        </main>
        <letcoding-footer></letcoding-footer>
    </div>
</template>

<script src="./login-center.js"></script>

<style lang="scss" scoped>
@import "./login-center.scss";
</style>
