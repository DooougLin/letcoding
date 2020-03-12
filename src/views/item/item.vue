<template>
    <div id="item">
        <letcoding-header></letcoding-header>
        <search-bar></search-bar>
        <div class="banner-bar">网站仅供个人学习 支付请使用沙盒支付宝 <span>阿里云以外商品不涉及真实交易!</span>👀</div>
        <main class="default-container">
            <div class="item-left">
                <!-- <magnifying-glass></magnifying-glass> -->
                <item-video></item-video>
                <div class="thumb-list">
                    <img src="~@/static/img/item/item-image/item-image-small-1.jpg">
                    <img src="~@/static/img/item/item-image/item-image-small-2.jpg">
                    <img src="~@/static/img/item/item-image/item-image-small-3.jpg">
                    <img src="~@/static/img/item/item-image/item-image-small-4.jpg">
                    <img src="~@/static/img/item/item-image/item-image-small-5.jpg">
                </div>
                <div class="favorite-info">
                    <img src="~@/static/img/public/not-favorite.png">
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
                        <ul>
                            <li class="color-type-selected">
                                <img src="~@/static/img/item/item-image/item-image-xs-1.jpg">
                                <i></i>
                            </li>
                            <li><img src="~@/static/img/item/item-image/item-image-xs-2.jpg">
                            </li>
                        </ul>
                    </div>
                    <div class="customize-detail number-type">
                        <span>数量</span>
                        <input class="number" type="text" placeholder="1">
                        <div class="arrow-wrapper">
                            <img src="~@/static/img/item/add-arrow.png" alt="">
                            <img src="~@/static/img/item/sub-arrow.png" alt="">
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
                            <img src="~@/static/img/item/item-carousel/1.jpg" height="140px">
                            <p>¥78.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/static/img/item/item-carousel/2.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/static/img/item/item-carousel/3.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/static/img/item/item-carousel/4.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/static/img/item/item-carousel/5.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="~@/static/img/item/item-carousel/6.jpg" height="140px">
                            <p>¥77.00</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-trigger">
                    <div class="swiper-prev"></div>
                    <div class="swiper-next"></div>
                </div>
            </div>
        </main>
        <div class="default-container aliyun-banner">
            <a href="https://www.aliyun.com/minisite/goods?userCode=zeb6kmng&share_source=copy_link" target="_blank">
                <img src="~@/static/img/item/aliyun.jpg" width="990px">
            </a>
        </div>
        <div class="default-container">
            <div class="detail-left">
                <div class="store-info-panel">
                    <h3>Letcoding店铺 <i></i></h3>
                </div>
                <div class="store-search-panel">
                    <p>本店搜索</p>
                    <dl>
                        <dt>关键字</dt>
                        <dd><input class="store-search-input-keyboard" type="text"></dd>
                    </dl>
                    <dl>
                        <dt>价格</dt>
                        <dd>
                            <input class="store-search-input-price" type="text">
                            <span>-</span>
                            <input class="store-search-input-price" type="text">
                        </dd>
                    </dl>
                    <div class="store-search-btn">
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="evaluation-panel">
                <div class="evaluation-panel-tab">
                    <ul>
                        <li class="evaluation-selected"><a href="">商品详情</a></li>
                        <li><a href="">累计评价<span> 77</span></a></li>
                    </ul>
                </div>
                <div class="item-detail">
                    <div class="item-name">品牌名称:<span>Spigen</span></div>
                    <div>产品参数:</div>
                    <ul>
                        <li>品牌: Spigen</li>
                        <li>型号: 苹果iphone 11手机壳</li>
                        <li>保护套质地: 硅胶</li>
                        <li>风格: 简约</li>
                        <li>适用手机机型: Apple/苹果</li>
                        <li>型号: iphone11</li>
                        <li>颜色分类: 【全透明】iphone 11 pro手机壳 【全透明】iphone 11手机壳 【全透明】iphone 11 pro max手机壳</li>
                        <li>生产企业: Spigen Korea Co., Ltd.</li>
                        <li>款式: 保护壳</li>
                    </ul>
                    <div class="clear"></div>
                </div>
                <p class="item-detail-image">
                    <img v-lazy="'@/static/item/item-detail-image/1.jpg'">
                    <img src="~@/static/img/item/item-detail-image/2.jpg">
                    <img src="~@/static/img/item/item-detail-image/3.jpg">
                </p>
                <div class="item-detail-footer">
                    <dl>
                        <dt>安全提示：</dt>
                        <dd>本站仅供个人学习使用，支付方式仅有沙盒支付宝，阿里云是外链广告，请勿随意接收其他来源不明的文件，请勿随意点击任何来源不明的链接。涉及资金往来的事项请务必仔细核对资金往来信息。</dd>
                    </dl>
                    <p>
                        <span>推荐安全软件:</span>
                        <a href="https://qd.alibaba.com/v/qdpc.htm" target="_blank">
                            <img src="~@/static/img/item/qiandun.png">
                            <span>钱盾</span>
                        </a>
                    </p>
                </div>
            </div>
            <div class="item-right">
                <s class="item-right-dotted"></s>
                <span>猜你喜欢</span>
                <div class="right-wrapper">
                    <div>
                        <img src="~@/static/img/item/item-carousel/1.jpg" height="140px">
                        <p>¥78.00</p>
                    </div>
                    <div>
                        <img src="~@/static/img/item/item-carousel/2.jpg" height="140px">
                        <p>¥77.00</p>
                    </div>
                    <div>
                        <img src="~@/static/img/item/item-carousel/3.jpg" height="140px">
                        <p>¥77.00</p>
                    </div>
                    <div>
                        <img src="~@/static/img/item/item-carousel/4.jpg" height="140px">
                        <p>¥77.00</p>
                    </div>
                    <div>
                        <img src="~@/static/img/item/item-carousel/5.jpg" height="140px">
                        <p>¥77.00</p>
                    </div>
                    <div>
                        <img src="~@/static/img/item/item-carousel/6.jpg" height="140px">
                        <p>¥77.00</p>
                    </div>
                </div>
            </div>
        </div>
        <letcoding-footer class="clear"></letcoding-footer>
    </div>
</template>

<script src="./item.js"></script>

<style lang="scss" scoped>
@import "./item.scss";
</style>
