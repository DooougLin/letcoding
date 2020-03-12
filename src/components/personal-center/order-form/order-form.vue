<template>
    <div class="order-form">
        <div class="top-nav">
            <ul>
                <li>所有订单<span>1</span></li>
                <li>待付款<span>1</span></li>
                <li>待发货<span>2</span></li>
                <li>待收款<span>2</span></li>
                <li>待评价<span></span></li>
                <li>退款<span></span></li>
            </ul>
        </div>
        <input type="text" placeholder="输入商品标题或订单号进行搜索">
        <div class="order-search-btn">订单搜索</div>
        <table class="clear title-table">
            <tbody>
                <tr>
                    <td v-for="item in headers" :key="item.title" :style="{width:item.width}">{{item.title}}</td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            <div>下一页</div>
            <div>上一页</div>
        </div>
        <table v-for="order in orders" :key="order.id" class="clear order-table">
            <tbody>
                <tr class="order-table-title">
                    <td class="order-info">
                        <span class="order-date">{{order.date}}</span>订单号: {{order.id}}
                    </td>
                    <td colspan="2" class="store-name">
                        <span>
                            <img src="http://gtd.alicdn.com/tps/i2/TB1aJQKFVXXXXamXFXXEDhGGXXX-32-32.png">
                            <a href="">{{order.storeName}}</a>
                        </span>
                    </td>
                    <td class="connect-with-me">
                        <a href=""></a>
                    </td>
                    <td colspan="3" class="order-operation">
                        <i class="delete-order"></i>
                    </td>
                </tr>
                <tr class="order-table-item" v-for="item in order.items" :key="item.id">
                    <td class="item-info">
                        <div>
                            <img
                                src="http://img.alicdn.com/imgextra/i3/2919754574/O1CN01ZVR7vQ1jewBTEi7ll_!!0-item_pic.jpg_80x80.jpg">
                            <span class="clear"></span>
                            <div class="item-info-text">
                                <p><span>{{item.name}}</span></p>
                                <p class="item-info-type"><span>颜色分类</span>：<span>{{item.type}}</span></p>
                                <p class="item-info-icon">
                                    <img
                                        src="http://img.alicdn.com/imgextra/i3/2919754574/O1CN01ZVR7vQ1jewBTEi7ll_!!0-item_pic.jpg_80x80.jpg//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png">
                                    <img
                                        src="http://img.alicdn.com/imgextra/i3/2919754574/O1CN01ZVR7vQ1jewBTEi7ll_!!0-item_pic.jpg_80x80.jpg//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png">
                                    <img
                                        src="http://img.alicdn.com/imgextra/i3/2919754574/O1CN01ZVR7vQ1jewBTEi7ll_!!0-item_pic.jpg_80x80.jpg//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png">
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="item-price">
                        <div>
                            <p class="old-price">￥{{item.oldPrice}}</p>
                            <p>￥{{item.price}}</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>{{item.count}}</p>
                        </div>
                    </td>
                    <td class="order-function">
                        <dir>
                            <p>申请售后</p>
                            <p>投诉商家</p>
                        </dir>
                    </td>
                    <td class="order-total border-wrapper-order-table-right">
                        <div>
                            <p v-show="item.totalPrice">￥{{item.totalPrice}}</p>
                            <p class="order-freight" v-show="item.freight">(含运费: {{item.freight}})</p>
                        </div>
                    </td>
                    <td class="order-status border-wrapper-order-table-right">
                        <div>
                            <p>交易成功</p>
                            <p>查看物流</p>
                            <p>双方已评价</p>
                        </div>
                    </td>
                    <td class="additional-function border-wrapper-order-table-right">
                        <div>
                            <p>追加评论</p>
                            <p>申请开票</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="./order-form.js"></script>

<style lang="scss">
@import './order-form.scss';
</style>
