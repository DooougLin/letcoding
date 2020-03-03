<template>
    <header class="header lighten-grey grey--text">
        <div class="default-container">
            <div class="top-left inline">
                <span>欢迎来到LetCoding</span>
                <a href="">登录</a>
                <a href="">注册</a>
            </div>
            <a href="">我的订单</a>
            <a href="">购物车</a>
            <a href="">收藏夹</a>
        </div>
    </header>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header {
    height: 26px;
    line-height: 26px;
    border-bottom: 1px solid rgb(229, 229, 229);

    & > div > a {
        float: right;
        margin-left: 20px;
    }
}

.top-left a {
    margin-left: 20px;
}
</style>
