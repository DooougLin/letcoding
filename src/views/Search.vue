<template>
    <div id="search">
        <Header></Header>
        <header class="default-container">
            <div class="search-warp">
                <a href="">
                    <img src="~@/assets/public/logo-top.png" height="48px">
                </a>
                <div class="search-btn">搜索</div>
                <input class="search-input" type="text">
            </div>
            <div class="filter">
                <div class="filter-price">
                    <span>价格:</span>
                    <input class="rmb" placeholder="¥" type="text">
                    -
                    <input class="rmb" placeholder="¥" type="text">
                    <div class="filter-price-btn">确定</div>
                </div>
                <select>
                    <option disabled value="">请选择</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <div class="others">
                    <input type="checkbox" value="Jack">
                    <label for="包邮">包邮</label>
                    <input type="checkbox" value="John">
                    <label for="正品保障">正品保障</label>
                </div>
            </div>
        </header>
        <!-- <main>

        </main> -->
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Header, Footer
    }
};
</script>

<style lang="scss">
.search-warp {
    height: 90px;
    img {
        position: relative;
        top: 21px;
    }
}
.search-input {
    float: right;
    position: relative;
    top: 26px;
    width: 720px;
    height: 23px;
    border: 2px solid #c40000;
    outline: none;
    font-size: 14px;
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 5px;
}
.search-btn {
    float: right;
    position: relative;
    top: 26px;
    width: 95px;
    height: 38px;
    background: #c40000;
    color: white;
    text-align: center;
    line-height: 38px;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
}
.filter {
    /* padding: 0 10px; */
    height: 38px;
    line-height: 38px;
    border: 1px solid #e8e8e8;
    margin-bottom: 10px;
    color: #747474;
}
.filter-price {
    float: left;
    padding: 0 10px;
    /* box-shadow: rgb(170, 170, 170) 1px 1px 6px 0px; */
    span {
        margin-right: 10px;
    }
    input {
        width: 42px;
        padding: 1px;
        padding-left: 3px;
    }
}
.filter-price-btn {
    display: none;
    margin-left: 12px;
    padding: 0 10px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 3px;
    background: #c40000;
    color: white;
}
.others {
    float: right;
}
</style>
