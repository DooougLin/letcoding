<template>
    <div class="magnifying-glass">
        <div @mousemove="move" @mouseenter.prevent="show=true" @mouseleave="show=false"
            :style="getBoxSize(smallImageSize)">
            <img src="~@/assets/item/item-image/item-image-1.jpg"
                style="width:inherit;height:inherit;border: 1px solid #f2f2f2;">
            <div class="top-shadow"></div>
            <div v-show="show" class="shadow" :style="shadow"></div>
        </div>
        <div v-show="show" class="large-img-container" :style="getBoxSize(largeImageContainerSize)">
            <img src="~@/assets/item/item-large-image/1.jpg" :style="largeImage">
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        shadowSize: 218,
        smallImageSize: 418,
        largeImageSize: 800,
        largeImageContainerSize: 418,
        left: 0,
        top: 0,
        show: false
    }),
    computed: {
        shadow(){
            const {width, height} = this.getBoxSize(this.shadowSize);

            return {
                width,
                height,
                left: `${this.left}px`,
                top: `${this.top}px`
            };
        },
        largeImage(){
            const {width, height} = this.getBoxSize(this.largeImageSize);

            return {
                width,
                height,
                position: 'absolute',
                left: `${Math.ceil(-this.left * (this.largeImageSize / this.smallImageSize))}px`,
                top: `${Math.ceil(-this.top * (this.largeImageSize / this.smallImageSize))}px`
            };
        }
    },
    methods: {
        getBoxSize(size){
            return {
                width: `${size}px`,
                height: `${size}px`
            };
        },
        move(e){
            const x = e.offsetX - this.shadowSize / 2;
            const y = e.offsetY - this.shadowSize / 2;

            if (x <= 0){
                this.left = 0;
            } else if (x > this.smallImageSize - this.shadowSize){
                this.left = this.smallImageSize - this.shadowSize + 1;
            } else {
                this.left = x;
            }

            if (y <= 0){
                this.top = 0;
            } else if (y > this.smallImageSize - this.shadowSize){
                this.top = this.smallImageSize - this.shadowSize + 1;
            } else {
                this.top = y;
            }
        }
    }
};
</script>

<style lang="scss">
.magnifying-glass {
    position: relative;
    width: 418px;
    height: 418px;
    margin: 20px;
    margin-bottom: 0;
    div:first-child {
        position: relative;
    }
}
.top-shadow {
    position: absolute;
    left: 0;
    top: 0;
    width: inherit;
    height: inherit;
    background-color: rgba(220, 220, 220, 0);
    z-index: 999;
}
.shadow {
    position: absolute;
    background: url("~@/assets/item/image-dot.png");
}
.large-img-container {
    position: absolute;
    top: 0;
    left: 418px;
    margin-left: 10px;
    border: 1px solid #f2f2f2;
    background: white;
    overflow: hidden;
    z-index: 999;
}
</style>
