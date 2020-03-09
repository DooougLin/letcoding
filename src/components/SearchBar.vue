<template>
    <div class="default-container">
        <div class="search-container">
            <a href="">
                <img src="~@/assets/public/logo-top.png" height="48px">
            </a>
            <div class="search-box">
                <div class="home-search-btn">搜索</div>
                <div class="home-search-input">dsada</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
</script>
<style lang="scss">
/* 搜索 */
.search-container {
    height: 92px;
    img {
        padding-top: 22px;
    }
    div {
        float: right;
    }
}
.search-box {
    height: 30px;
    padding-top: 28px;
}
.home-search-input {
    padding: 5px;
    width: 439px;
    height: 20px;
    border: 3px solid red;
}
.home-search-btn {
    padding-right: 3px;
    width: 90px;
    height: 36px;
    background: red;
    color: white;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
}
</style>
