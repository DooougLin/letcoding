<template>
    <div class="magnifying-glass">
        <div @mousemove="move" @mouseenter.prevent="show=true" @mouseleave="show=false"
            :style="getBoxSize(smallImageSize)">
            <img src="~@/static/img/item/item-image/item-image-1.jpg"
                style="width:inherit;height:inherit;border: 1px solid #f2f2f2;">
            <div class="top-shadow"></div>
            <div v-show="show" class="shadow" :style="shadow"></div>
        </div>
        <div v-show="show" class="large-img-container" :style="getBoxSize(largeImageContainerSize)">
            <img src="~@/static/img/item/item-large-image/1.jpg" :style="largeImage">
        </div>
    </div>
</template>

<script src="./magnifying-glass.js"></script>

<style lang="scss">
@import "./magnifying-glass.scss";
</style>
