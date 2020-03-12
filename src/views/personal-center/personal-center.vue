<template>
    <div class="admin">
        <letcoding-header></letcoding-header>
        <!-- <search-bar class="bg-orange"></search-bar> -->
        <div class="bg-orange">
            <div class="default-container top-bar">
                LetCoding
            </div>
        </div>
        <div class="default-container main-box">
            <nav class="default-container">
                <ul>
                    <li>全部功能</li>
                    <li>我的订单</li>
                    <li>我的购物车</li>
                    <li>我的地址</li>
                    <li>我的收藏</li>
                    <li>我的积分</li>
                    <li>个人资料</li>
                </ul>
            </nav>
            <order-form v-show="demo"></order-form>
            <addr></addr>
        </div>
        <letcoding-footer></letcoding-footer>
    </div>
</template>

<script src="./personal-center.js"></script>

<style lang="scss" scoped>
@import "./personal-center.scss";
</style>
