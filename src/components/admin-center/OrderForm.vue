<template>
    <div class="order-form">
        <div>
            <ul>
                <li>所有订单<span>1</span></li>
                <li>待付款<span>1</span></li>
                <li>待发货<span>2</span></li>
                <li>待收款<span>2</span></li>
                <li>待评价<span></span></li>
                <li>退款<span></span></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
.order-form {
    float: left;
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
}
</style>
