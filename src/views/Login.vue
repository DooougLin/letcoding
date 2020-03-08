<template>
    <div class="login">
        <div class="default-container top">
            <a href="">
                <img src="~@/assets/public/logo-top.png" height="48px">
            </a>
        </div>
        <main>
            <div class="default-container">
                <img src="https://img.alicdn.com/tfs/TB1Psi.xbH1gK0jSZFwXXc7aXXa-1190-600.jpg">
                <LoginComponent v-if="isLogin"></LoginComponent>
                <Registry v-else></Registry>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import Registry from '@/components/Registry.vue';

export default {
    components: {
        Footer, LoginComponent, Registry
    },
    data: () => ({
        isLogin: false
    }),
    methods: {
    }

};
</script>

<style lang="scss">
.login {
    .top {
        padding: 20px 0;
        height: 48px;
    }
    main {
        background: #2dafe8;
        position: relative;
    }
}
</style>
