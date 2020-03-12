<template>
    <div id="search">
        <letcoding-header></letcoding-header>
        <header class="default-container">
            <div class="search-warp">
                <a href="">
                    <img src="~@/static/img/public/logo-top.png" height="48px">
                </a>
                <div class="search-btn">搜索</div>
                <input class="search-input" type="text">
            </div>
            <div class="filter">
                <div class="filter-price">
                    <span>价格:</span>
                    <input class="rmb" placeholder="¥" type="text">
                    -
                    <input class="rmb" placeholder="¥" type="text">
                    <div class="filter-price-btn">确定</div>
                </div>
                <select>
                    <option disabled value="">请选择</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <div class="others">
                    <a href="">
                        <input type="checkbox" value="Jack">
                        包邮
                    </a>
                    <a href="">
                        <input type="checkbox" value="John">
                        正品保障
                    </a>
                    <a href="">
                        <input type="checkbox" value="John">
                        7天退换
                    </a>
                    <a href="">
                        <input type="checkbox" value="John">
                        消费者保障
                    </a>
                </div>
            </div>
        </header>
        <main class="default-container">
            <div class="item">
                <span>
                    <img style="item-img" src="~@/static/img/home/item-demo.webp" alt="">
                </span>
                <div class="info">
                    <p>
                        <span class="price">¥
                            <strong>12.00</strong>
                        </span>
                        <span class="postal-icon">包邮</span>
                    </p>
                    <p class="item-name">vivoiqoo3手机壳网红个性磨砂硬壳简约情侣ssss</p>
                    <p class="store-info">简欧数码专营店
                        <span class="pay-number">0人付款</span>
                    </p>
                    <p class="more-info">
                        <img class="bilibili" height="16px" src="~@/static/img/public/woaibilibili.png" alt="">
                        <span class="inline-block">如实描述: 4.9</span>
                    </p>
                </div>
            </div>
        </main>
        <letcoding-footer></letcoding-footer>
    </div>
</template>

<script src="./search.js"></script>

<style lang="scss" scoped>
@import "./search.scss";
</style>
