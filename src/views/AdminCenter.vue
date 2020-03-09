<template>
    <div class="admin">
        <Header></Header>
        <!-- <SearchBar class="bg-orange"></SearchBar> -->
        <div class="bg-orange">
            <div class="default-container top-bar">
                LetCoding
            </div>
        </div>
        <div class="default-container main-box">
            <nav class="default-container">
                <ul>
                    <li>全部功能</li>
                    <li>我的订单</li>
                    <li>我的购物车</li>
                    <li>我的地址</li>
                    <li>我的收藏</li>
                    <li>我的积分</li>
                    <li>个人资料</li>
                </ul>
            </nav>
            <OrderForm v-show="demo"></OrderForm>
            <Addr></Addr>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import OrderForm from '@/components/admin-center/OrderForm.vue';
import Addr from '@/components/admin-center/Addr.vue';
// import SearchBar from '@/components/SearchBar.vue';

export default {
    components: {
        Header, Footer, OrderForm, Addr
    },
    data: () => ({
        demo: false
    })
};
</script>
<style lang="scss">
.bg-orange {
    background: #ff4401;
}
.admin {
    .top-bar {
        padding: 12px 0;
        height: 36px;
        line-height: 36px;
        color: white;
        font-size: 36px;
        font-weight: 700;
    }
    .main-box {
        margin-top: 25px;
        // border-top: 1px solid #d1d7dc;
        height: 500px;
    }
    nav {
        float: left;
        width: 110px;
        ul {
            height: 28px;
            line-height: 28px;
            li {
                cursor: pointer;
            }
            li:first-child {
                margin: 5px 10px 1px 0;
                font-size: 15px;
                color: #f40;
                cursor: default;
            }
            li:hover {
                color: #f40;
            }
        }
    }
}
</style>
