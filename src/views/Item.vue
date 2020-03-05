<template>
    <div id="item">
        <Header></Header>
        <SearchBar></SearchBar>
        <div class="banner-bar">网站仅供个人学习 所有交易均使用沙盒支付宝完成 <span>不涉及真实交易!</span>👀</div>
        <main class="default-container">
            <div class="item-left">
                <img width="418px" height="418px" src="~@/assets/item/item-image/item-image-1.jpg" alt="">
                <div class="thumb-list">
                    <img src="~@/assets/item/item-image/item-image-small-1.jpg">
                    <img src="~@/assets/item/item-image/item-image-small-2.jpg">
                    <img src="~@/assets/item/item-image/item-image-small-3.jpg">
                    <img src="~@/assets/item/item-image/item-image-small-4.jpg">
                    <img src="~@/assets/item/item-image/item-image-small-5.jpg">
                </div>
                <div class="favorite-info">
                    <img src="~@/assets/public/not-favorite.png">
                    <span class="favorite">收藏商品</span>
                    <span>(198人气)</span>
                    <span>举报</span>
                </div>
            </div>
            <div class="item-center">
                <h1 class="item-title">Spigen 苹果iphone 11手机壳iPhone11proMax手机壳透明硅胶全包防摔保护套iPhone11 pro超薄网红个性潮壳</h1>
                <h2 class="item-sub-title">【新品上市直角设计，舒适手感，还原裸机】</h2>
                <div class="item-price-panel">
                    <dl class="price">
                        <dt>价格</dt>
                        <dd><span>¥</span>169.00</dd>
                    </dl>
                    <dl class="promo-price">
                        <dt>促销价</dt>
                        <dd><span>¥</span>69.00</dd>
                    </dl>
                </div>
                <div class="freight-panel">
                    <p>运费</p>
                    <p>浙江台州 至</p>&nbsp;
                    <p>上海</p>
                    <p>快递: 0.00</p>
                </div>
                <div class="sell-volumn-panel">
                    <p>月销量<span>2</span></p>
                    <p>累计评价<span>40</span></p>
                    <p>送coding积分<span>3</span></p>
                </div>
                <div class="customize-panel">
                    <div class="customize-detail color-type">
                        <span>颜色分类</span>
                        <img src="~@/assets/item/item-image/item-image-xs-1.jpg" alt="">
                        <img src="~@/assets/item/item-image/item-image-xs-2.jpg" alt="">
                    </div>
                    <div class="customize-detail number-type">
                        <span>数量</span>
                        <input class="number" type="text" placeholder="1">
                        <div class="arrow-wrapper">
                            <img src="~@/assets/item/add-arrow.png" alt="">
                            <img src="~@/assets/item/sub-arrow.png" alt="">
                        </div>
                        <span>件</span>
                        <span class="storage">库存84件</span>
                    </div>
                </div>
                <div class="item-btn">
                    <div>立即购买</div>
                    <div>加入购物车</div>
                </div>
                <div class="welfare">
                    <ul>
                        <li>服务承诺</li>
                        <li>正品保证</li>
                        <li>极速退款</li>
                        <li>赠运费险</li>
                        <li>七天无理由退换</li>
                    </ul>
                </div>
            </div>
            <div class="item-right">
                <s class="item-right-dotted"></s>
                <span>看了又看</span>
                <div id="swiper3" class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="~@/assets/item/item-carousel/1.jpg" height="140px">
                            <p>¥78.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/assets/item/item-carousel/2.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/assets/item/item-carousel/3.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/assets/item/item-carousel/4.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/assets/item/item-carousel/5.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/assets/item/item-carousel/6.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-trigger">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SearchBar from '@/components/SearchBar.vue';
import Swiper from 'swiper';

export default {
    components: {
        Header, Footer, SearchBar
    },
    data: () => ({

    }),
    methods: {
        initSwiper(){
            setTimeout(() => {
                this.swiper3 = new Swiper('#swiper3', {
                    direction: 'vertical',
                    // observer: true,
                    // observeParents: true
                    slidesPerView: 3,
                    slidesPerGroup: 3
                });
            }, 300);
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.initSwiper();
        });
    }
};
</script>

<style lang="scss">
#item {
    .banner-bar {
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #323232;
        color: white;
        span {
            font-weight: bolder;
            color: #ff0036;
        }
    }
    main {
        margin: 20px auto;
        height: 604px;
        .item-left {
            float: left;
            width: 460px;
            height: 604px;
            & > img {
                margin: 20px;
                margin-bottom: 0;
                border: 1px solid #f2f2f2;
            }
        }
        .item-center {
            float: left;
            padding-bottom: 10px;
            width: 529px;
            text-align: left;
            border-right: 1px solid #f2f2f2;
            min-height: 604px;
        }
    }
}
.thumb-list {
    text-align: center;
    padding-top: 22px;
    img {
        display: inline-block;
        margin-left: 16px;
        padding: 2px;
        &:hover {
            padding: 0;
            border: 2px solid #000;
        }
    }
}
.favorite-info {
    padding: 38px 40px 25px 40px;
    width: 380px;
    height: 20px;
    line-height: 20px;
    img {
        float: left;
        padding: 2px 2px 2px 0;
    }
    span {
        display: block;
        float: left;
        color: #999;
    }
    .favorite {
        padding-right: 10px;
    }
    span:last-child {
        float: right;
    }
}
.item-title {
    text-align: left;
    padding: 20px 10px 3.2px 10px;
    font-size: 16px;
    font-weight: 700;
}
.item-sub-title {
    padding-bottom: 12px;
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    color: #ff0036;
}
.item-center {
    .item-price-panel {
        padding: 5px 0;
        margin-right: 20px;
        width: 510px;
        height: 57px;
        background: url("~@/assets/item/price-shadwo.png");
        dt {
            float: left;
            margin-left: 8px;
            width: 69px;
            height: 18px;
            line-height: 18px;
            color: #999;
        }
        dd {
            display: inline;
        }
        .price {
            dd {
                font-size: 14px;
                text-decoration: line-through;
            }
            span {
                font-size: 12px;
                margin-right: 2px;
            }
        }
        .promo-price {
            clear: both;
            width: 510px;
            height: 36px;
            line-height: 36px;
            dt {
                height: 36px;
                line-height: 36px;
            }
            dd {
                font-size: 30px;
                font-weight: bolder;
                color: #ff0036;
                span {
                    font-size: 18px;
                    margin-right: 2px;
                }
            }
        }
    }
    .freight-panel {
        margin: 5px 20px 5px 0;
        width: 510px;
        height: 36px;
        line-height: 36px;
        p {
            display: inline-block;
        }
        p:first-child {
            margin: 0 10px;
            width: 50px;
            color: #999;
        }
    }
    .sell-volumn-panel {
        margin-right: 20px;
        padding: 10px 0;
        width: 510px;
        height: 16px;
        line-height: 16px;
        border: 1px dotted #c9c9c9;
        border-left: none;
        border-right: none;
        p {
            display: inline-block;
            width: 169px;
            color: #999;
            text-align: center;
        }
        p:first-child {
            border-right: 1px dotted #c9c9c9;
        }
        p:last-child {
            border-left: 1px dotted #c9c9c9;
            span {
                color: #280;
            }
        }
        span {
            margin-left: 3px;
            font-weight: 700;
            color: #ff0036;
        }
    }
    .customize-panel {
        margin: 0 20px 0 10px;
        padding: 10px 0;
        .customize-detail {
            padding-bottom: 6px;
            height: 46px;
            line-height: 46px;
            color: #838383;
            span:first-child {
                float: left;
                display: block;
                width: 66px;
                height: 18px;
            }
        }
        .color-type {
            img {
                float: left;
                margin: 0 4px 4px 0;
                padding: 1px;
                border: 1px solid #b8b7bd;
                &:hover {
                    padding: 0;
                    border: 2px solid #ff0036;
                }
            }
        }
        .number-type {
            height: 35px;
            line-height: 35px;
            .number {
                float: left;
                margin-right: 4px;
                padding: 3px 2px 0 3px;
                width: 36px;
                height: 26px;
                border: 1px solid #a7a6ac;
                outline: none;
            }
            img {
                display: block;
                width: 16px;
                height: 12px;
                border: 1px solid #a7a6ac;
            }
            img:first-child {
                margin-bottom: 3px;
            }
            .arrow-wrapper {
                float: left;
                margin-right: 10px;
            }
            .storage {
                margin-left: 20px;
            }
        }
    }
    .item-btn {
        margin-top: 10px;
        margin-bottom: 46px;
        padding-top: 10px;
        padding-left: 66px;
        width: 443px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        div {
            cursor: pointer;
            float: left;
            width: 178px;
            height: 38px;
            line-height: 38px;
            border: 1px solid #ff0036;
        }
        div:first-child {
            margin-right: 10px;
            background: #ffeded;
            color: red;
        }
        div:last-child {
            background: #ff0036;
            color: white;
        }
    }
    .welfare {
        margin: 0 20px;
        padding-bottom: 20px;
        width: 490px;
        height: 23px;
        li {
            float: left;
            padding: 0 32px 5px 0;
            color: #666;
        }
        li:first-child {
            padding: 0;
            width: 66px;
            color: #999;
        }
    }
}
.item-right {
    float: left;
    margin-left: 13px;
    width: 175px;
    height: 480px;
    .item-right-dotted {
        display: block;
        width: 140px;
        border-top: 1px dotted #c9c9c9;
    }
    span {
        position: relative;
        top: -6px;
        left: 34px;
        padding: 0 10px;
        width: 72px;
        color: #999;
        background: white;
        z-index: 10;
    }
    #swiper3 {
        margin-top: 5px;
        width: inherit;
        height: inherit;
        img {
            display: block;
        }
        p {
            position: absolute;
            left: 0;
            bottom: 20px;
            width: 140px;
            height: 20px;
            background: rgba(255, 255, 255, 0.8);
            text-align: center;
        }
    }
    .swiper-trigger{
        // padding: 0 42px;
        margin-left: 43px;
        width: 140px;
        height: 27px;
        line-height: 27px;
        div{
            float: left;
        }
        div:first-child{
            width: 27px;
            height: 27px;
            background: url('~@/assets/item/sprite.png') no-repeat;
            background-position: 0 0;
            cursor: pointer;
        }
        div:last-child{
            width: 27px;
            height: 27px;
            background: url('~@/assets/item/sprite.png') no-repeat;
            background-position: 0 -30px;
            cursor: pointer;
        }
    }
}
</style>
