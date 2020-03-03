<template>
    <footer id="footer">
        <div class="default-container">
            <img class="footer-banner" src="~@/assets/public/footer.jpg" alt="">
            <div class="footer-nav">
                <dl class="f-l">
                    <dt>购物指南</dt>
                    <dd>支付说明</dd>
                    <dd>开通沙盒支付宝</dd>
                    <dd>支付宝充值</dd>
                </dl>
                <dl class="f-r">
                    <dt class="center">公众号</dt>
                    <img src="~@/assets/public/QR-code.jpg" height="105px" alt="">
                </dl>
            </div>
            <img class="block" src="~@/assets/public/cat.png" height="25px" alt="">
        </div>
        <div class="footer">
            <p>网站仅供个人学习 所有交易均使用沙盒支付宝完成 <span class="red--text fw-b">不涉及真实交易!</span></p>
            <p>侵删请致邮 <span class="grey--text fw-b">fakelinfeng@gmail.com</span> 谢谢理解🤢</p>
            <a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备 20003192号-1</a>
        </div>
    </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">
#footer {
    border-top: 1px solid #d1d7dc;
}
.footer-banner {
    margin: 25px 0;
}

.footer-nav {
    height: 160px;
    border-top: 1px solid #ededed;
    padding-top: 22px;
}

.footer-nav dl {
    padding-left: 52px;
}
.footer-nav dt {
    height: 30px;
    line-height: 30px;
    color: rgb(100, 100, 100);
    font-size: 16px;
    font-weight: bold;
}

.footer-nav dd {
    height: 20px;
    line-height: 20px;
    color: rgb(139, 139, 139);
}

.footer {
    height: 60px;
    line-height: 20px;
    text-align: center;
    background: #000;
    border-top: 2px solid red;
    color: white;
}
</style>
