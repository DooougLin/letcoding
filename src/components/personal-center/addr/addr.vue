<template>
    <div class="addr">
        <div class="add-btn">新增</div>
        <div class="addr-info">
            <img src="~@/static/img/admin/info.png">
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

<script src="./addr.js"></script>

<style lang="scss">
@import "./addr.scss";
</style>
