<template>
    <div class="registry-box">
        <p>
            账号注册
            <span class="sendVerify">发送验证码</span>
        </p>
        <!-- <div class="sendVerify"></div> -->
        <div class="field">
            <label for="phoneNumber">
                <img src="~@/assets/login/phone.png">
            </label>
            <input type="text" name="phoneNumber" placeholder="请输入手机号" v-model="phoneNumber">
            <img @click="phoneNumber=''" class="cancel-icon" src="~@/assets/login/cancel.png" v-show="phoneNumber">
        </div>
        <dir class="field"><label for="verify">
                <img src="~@/assets/login/verify.png">
            </label>
            <input type="text" name="verify" placeholder="请输入验证码" v-model="verify">
            <img @click="verify=''" class="cancel-icon" src="~@/assets/login/cancel.png" v-show="verify">
        </dir>
        <div class="field">
            <label for="cipher">
                <img src="~@/assets/login/lock.png">
            </label>
            <input type="password" name="cipher" placeholder="请输入密码" v-model="password">
            <img @click="password=''" class="cancel-icon" src="~@/assets/login/cancel.png" v-show="password">
        </div>
        <div class="field">
            <label for="confirmPassword">
                <img src="~@/assets/login/confirmPassword.png">
            </label>
            <input type="confirmPassword" name="confirmPassword" placeholder="请确认密码" v-model="confirmPassword">
            <img @click="confirmPassword=''" class="cancel-icon" src="~@/assets/login/cancel.png"
                v-show="confirmPassword">
        </div>
        <div class="commit-btn">注 册</div>
        <div class="more-info">
            <span>邮箱注册</span>
            <span>普通注册</span>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        verify: ''
    })
};
</script>
<style lang="scss">
.registry-box {
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
        margin-top: 15px;
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
    .sendVerify {
        margin-top: 10px;
        float: right;
        font-size: 12px;
        font-weight: 400;
        height: 15px;
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
