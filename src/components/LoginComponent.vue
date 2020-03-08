<template>
    <div class="login-box">
        <p>密码登录</p>
        <div class="field">
            <label for="userName">
                <img src="~@/assets/login/user-icon.png">
            </label>
            <input type="text" name="userName" placeholder="会员名/邮箱/手机号" v-model="userName">
            <img @click="userName=''" class="cancel-icon" src="~@/assets/login/cancel.png" v-show="userName">
        </div>
        <div class="field">
            <label for="cipher">
                <img src="~@/assets/login/lock.png">
            </label>
            <input type="password" name="cipher" v-model="password">
            <img @click="password=''" class="cancel-icon" src="~@/assets/login/cancel.png" v-show="password">
        </div>
        <div class="commit-btn">登 录</div>
        <div class="more-info">
            <span>免费注册</span>
            <span>忘记密码</span>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        userName: '',
        password: ''
    })
};
</script>
<style lang="scss">
.login-box {
    position: absolute;
    top: 15%;
    right: 22.3%;
    padding: 25px 26px 35px 26px;
    width: 298px;
    height: 345px;
    background: white;
    p {
        margin-top: 15px;
        height: 18px;
        line-height: 18px;
        color: #3c3c3c;
        font-size: 16px;
        font-weight: 700;
    }
    .field {
        position: relative;
        margin-top: 25px;
        width: 298px;
        height: 40px;
        line-height: 40px;
        label {
            position: absolute;
            top: 1px;
            left: 1px;
            display: block;
            width: 40px;
            height: 40px;
            text-align: center;
            background: #ddd;
            img {
                display: block;
                margin: 9px auto;
                height: 22px;
                width: 22px;
            }
        }
        .cancel-icon {
            position: absolute;
            top: 13.5px;
            right: 8px;
            cursor: pointer;
        }
        input {
            display: inline-block;
            border: 1px solid #cbcbcb;
            padding: 11px 8px 11px 50px;
            width: 240px;
            height: 18px;
            line-height: 18px;
        }
    }
    .commit-btn {
        margin-top: 20px;
        border-radius: 3px;
        width: 298px;
        height: 42px;
        line-height: 42px;
        color: white;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        background: #ff0036;
        cursor: pointer;
    }
    .more-info {
        margin-top: 25px;
        span {
            float: right;
            margin-right: 10px;
            color: #6c6c6c;
        }
    }
}
</style>
