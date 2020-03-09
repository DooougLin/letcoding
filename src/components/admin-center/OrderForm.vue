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
<script>
class Header{
    constructor(title, width){
        this.title = title;
        this.width = `${width}px`;
    }

    static getObjectFromArray(arr){
        return arr.map(e => new Header(...e));
    }
}

export default {
    // 一页15个宝贝
    data: () => ({
        headers: Header.getObjectFromArray([
            ['宝贝', 403], ['单价', 107], ['数量', 54],
            ['商品操作', 128], ['实付款', 128], ['交易状态', 115], ['交易操作', 128]
        ]),
        orders: [{
            'id': 7974907844777846524,
            'date': '2020-01-05',
            'storeName': 'LetCoding店铺',
            'items': [
                {
                    'id': 12313,
                    'name': '水星免驱USB无线网卡台式机千兆笔记本家用电脑360wifi接收器迷你无限网络信号驱动5G上网卡双频wi-fi随身',
                    'img': '',
                    'oldPrice': '23.00',
                    'price': '15.00',
                    'type': '口味:(送红杯+勺)奶香7条*3盒',
                    'count': 1,
                    'rights': [1, 2, 3],
                    'totalPrice': '27.7',
                    'freight': '0.00'
                },
                {
                    'id': 123133,
                    'name': '雀巢咖啡杯',
                    'oldPrice': '23.00',
                    'img': '',
                    'price': '15.00',
                    'type': '',
                    'count': 1,
                    'rights': [1, 2, 3]
                }
            ],
            'status': 1
        }]
    })
};
</script>
<style lang="scss">
.order-form {
    float: left;
    width: 1070px;
    .top-nav {
        margin-top: 22px;
    }
    ul {
        float: left;
        margin-bottom: 22px;
        width: 1070px;
        border-bottom: 2px solid #e8e8e8;

        li {
            float: left;
            padding: 0 0 12px 20px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            span {
                padding-right: 20px;
                margin-left: 4px;
                color: #f40;
                border-right: 1px solid #d1d7dc;
            }
        }
        li:hover {
            color: #f40;
        }
        li:last-child {
            span {
                border: none;
            }
        }
    }
    input {
        float: left;
        border: 1px solid #bfbfbf;
        padding: 4px 8px;
        width: 216px;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
    }
    .order-search-btn {
        float: left;
        margin-bottom: 20px;
        border: 1px solid #bfbfbf;
        border-left: none;
        padding: 0 16px;
        width: 48px;
        height: 24px;
        line-height: 24px;
        background: #f5f5f5;
        cursor: pointer;
    }
    .title-table {
        margin: 10px 0;
        border: 1px solid rgb(232, 232, 232);
        background: #f5f5f5;
        width: 1069px;
        td {
            padding: 5px 0;
            height: 28px;
            line-height: 28px;
            text-align: center;
        }
    }
    .pagination {
        width: 1070px;
        height: 24px;
        div {
            float: right;
            border: 1px solid #dcdcdc;
            border-radius: 3px;
            padding: 0 12px;
            width: 36px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            cursor: pointer;
        }
        div:last-child {
            margin-right: 6px;
        }
    }
    .order-table {
        margin: 10px 0;
        border: 1px solid #ececec;
        width: 100%;
        td {
            text-align: center;
            padding: 10px 0;
        }
        p {
            margin: 8px 0;
        }
        .order-table-title {
            position: relative;
            background: #f1f1f1;
            width: 1070px;
            td {
                height: 22px;
                line-height: 22px;
                vertical-align: middle;
            }
            .order-info {
                text-align: left;
                width: 406px;
                .order-date {
                    margin-left: 20px;
                    margin-right: 10px;
                    font-weight: 700;
                }
            }
            .store-name {
                padding: 10px 20px;
                width: 121px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                img {
                    display: inline-block;
                    margin-right: 3px;
                    width: 16px;
                    height: 16px;
                    vertical-align: middle;
                }
                a {
                    display: inline-block;
                    height: 16px;
                    line-height: 16px;
                    vertical-align: middle;
                }
            }
            .connect-with-me {
                width: 128px;
                a {
                    display: inline-block;
                    width: 67px;
                    height: 20px;
                    background: no-repeat
                        url("https://img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif");
                }
            }
            .order-operation {
                padding-right: 20px;
                border-bottom: 1px solid #ececec;
                .delete-order {
                    float: right;
                    display: block;
                    width: 17px;
                    height: 17px;
                    background: url("http://img.alicdn.com/tps/i1/TB1heyGFVXXXXXpXXXXR3Ey7pXX-550-260.png")
                        no-repeat -239px -176px;
                    cursor: pointer;
                }
            }
        }
        .order-table-item {
            td {
                vertical-align: top;
                border-top: 1px solid #ececec;
            }
            .item-info {
                div {
                    margin-left: 20px;
                }
                img {
                    float: left;
                    width: 80px;
                    height: 80px;
                }
                .item-info-text {
                    margin-left: 90px;
                    p {
                        width: 296px;
                        line-height: 16px;
                        text-align: left;
                        span {
                            width: 285.77px;
                            word-break: break-all;
                        }
                    }
                    .item-info-type {
                        color: #9e9e9e;
                    }
                    .item-info-icon {
                        img {
                            display: inline-block;
                            margin-right: 8px;
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }
            .item-price {
                div {
                    width: 107px;
                    .old-price {
                        text-decoration: line-through;
                        color: #9c9c9c;
                    }
                }
            }
            .order-function {
                p {
                    margin: 8px 0 3px 0;
                    cursor: pointer;
                }
            }
            .order-total {
                div {
                    width: 128px;
                }
                .order-freight {
                    color: #6c6c6c;
                }
            }
            .order-status {
                div {
                    width: 115px;
                    p {
                        cursor: pointer;
                    }
                }
            }
        }
        &:hover {
            border-color: #bfbfbf;
        }
    }
    .border-wrapper-order-table-right {
        border: 1px solid #ececec;
        border-width: 0 1px !important;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
    }
}
</style>
