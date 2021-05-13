<template>
    <div class="mainbody">
        <div class="headtop">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./images/1.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/5.gif">
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/6.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/7.jpg">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <p class="headtext">众元区块链</p>
        </div>
        <div class="body">
            <div class="intr">
                <img src="./images/2.jpg" alt="">
                <a href="#" class="alink">App介绍</a>
                <p>一家专门为比特币交易的App</p>
            </div>
            <div class="intr">
                <img src="./images/3.jpg" alt="">
                <a href="#" class="alink">公司介绍</a>
                <p>众元科技，为你服务</p>
            </div>
            <div class="intr">
                <img src="./images/4.jpg" alt="">
                <a href="#" class="alink">功能玩法介绍</a>
                <p>多种玩法，任你挑选</p>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
export default {
    mounted(){
        new Swiper(".swiper-container",{
            loop:true,
            pagination: {
               el: '.swiper-pagination',
            },
            autoplay:true
        })
    }
}
</script>

<style lang="stylus">
    .mainbody
        width 100vw
        height 110vh
        overflow hidden
        background-color #122631
        a
            color #fff
        .headtop
            position relative
            img
                width 100vw
                box-shadow 0 0 10px #fff 
            .headtext
                position absolute
                top 15px
                right 15px
                color #fff
                font-size 20px
                width 20px
        .body
            margin 5vw
            .intr
                width 90vw
                position relative
                img 
                    box-shadow 0 0 10px #fff
                    width 90vw
                    height 45vw
                    border none
                    margin-bottom 15px
                    border-radius 10px
                .alink
                    position absolute
                    left 30px
                    bottom 50px
                    font-size 20px
                p 
                    position absolute
                    left 30px
                    bottom 20px
                    color #fff
</style>