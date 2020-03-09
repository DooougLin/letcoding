<template>
    <div class="addr">
        <div class="add-btn">新增</div>
        <div class="addr-info">
            <img src="~@/assets/admin/info.png">
            <span>已保存2了条地址，还能保存18条地址</span>
        </div>
        <table>
            <thead>
                <tr>
                    <th>收货人</th>
                    <th>详细地址</th>
                    <th>邮编</th>
                    <th>电话/手机</th>
                    <th>操作</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>林峰</td>
                    <td>东辉小区2幢5单元410</td>
                    <td>317500</td>
                    <td>17855814890</td>
                    <td><span>修改</span> | <span>删除</span></td>
                    <td><span>设为默认</span></td>
                </tr>
                <tr>
                    <td>林峰</td>
                    <td>东辉小区2幢5单元410</td>
                    <td>317500</td>
                    <td>17855814890</td>
                    <td><span>修改</span> | <span>删除</span></td>
                    <td><span>设为默认</span></td>
                </tr>
            </tbody>
        </table>
        <div class="dialog" v-show="dialog">
            <div class="dialog-box">
                <p>编辑收货地址</p>
                <div><input type="text" placeholder="请输入收货人"></div>
                <div><input class="detail-addr" type="text" placeholder="请输入详细地址"></div>
                <div><input type="text" placeholder="请输入邮编"></div>
                <div><input type="text" placeholder="请输入电话/手机"></div>
                <div></div>
            </div>
            <div class="dialog-shadow">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        dialog: true
    })
};
</script>
<style lang="scss">
.addr {
    float: left;
    width: 1070px;
    .add-btn {
        margin-bottom: 10px;
        border-radius: 3px;
        padding: 8px;
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #ff4401;
        color: white;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }
    .addr-info {
        margin-bottom: 20px;
        border: 1px solid #e3f2fd;
        border-radius: 3px;
        padding: 12px 20px 12px 24px;
        width: 1024px;
        height: 16px;
        background: #e3f2fd;
        img {
            float: left;
        }
        span {
            float: left;
            padding-left: 8px;
            height: 16px;
            line-height: 16px;
            color: #666;
        }
    }
    table {
        width: 100%;
        th,
        td {
            border: 1px solid #dcdee3;
        }
        th {
            padding: 12px 16px;
            background: #ebecf0;
            font-weight: normal;
            text-align: center;
        }
        td {
            width: 68px;
            height: 72px;
            line-height: 72px;
            text-align: center;
            span {
                cursor: pointer;
            }
        }
        tr {
            transition: all 0.3s ease;
        }
        tr:hover {
            background: #f2f3f7;
        }
    }
    .dialog {
        .dialog-box {
            position: absolute;
            top: 25%;
            left: 40%;
            padding: 20px 15px;
            width: 400px;
            height: 400px;
            background: white;
            z-index: 1002;
            p {
                height: 20px;
                line-height: 20px;
                font-size: 16px;
                font-weight: 700;
            }
            div {
                margin-top: 25px;
                input {
                    padding: 8px;
                    border: 1px solid #c4c6cf;
                    border-radius: 3px;
                    width: 382px;
                    height: 26px;
                    line-height: 26px;
                }
                .detail-addr{
                    height: 52px;
                    line-height: 26px;
                }
            }
        }
        .dialog-shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba($color: #666666, $alpha: 0.5);
            z-index: 1001;
        }
    }
}
</style>
