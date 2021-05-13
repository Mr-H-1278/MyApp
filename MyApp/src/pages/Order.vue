<template>
    <div class="app">
        <HeaderTop title="订单" style="backgroumd-color:#232131">
        </HeaderTop>
        <div class="body">
            <div class="top">
                <p>当前价格:</p>
                <h2>5.25¥</h2>
                <div class="detailinfo">
                    <div class="left">
                        <p>今日成交：125.00</p>
                        <p>历史成交：123038.20</p>
                    </div>
                    <div class="right">
                        <p>当前价格：5.25</p>
                        <p>手续费：50%</p>
                    </div>
                </div>
            </div>
            <div class="center">
                <img src="./order/images/1.jpg" alt="">
            </div>
            <div class="down">
                <router-link to="/orderList">求购订单</router-link>
                <router-link to="/myOrder">我的订单</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop/HeaderTop.vue"
export default {
    components:{
        HeaderTop
    }
}
</script>

<style lang="stylus">
.app
    background-color #141d2c
    color #fff
    .body
        .top
            width 100vw
            height  60vw
            position relative
            &>p
                color grey 
                font-size 15px
                height 30px
                padding 10px
            &>h2 
                margin 0 auto 
                position absolute
                left 50%
                transform translateX(-50%)
                top 20vw
                font-size 40px
            &>.detailinfo
                display  flex 
                justify-content space-around
                position absolute
                bottom 5vw
                width 100vw
                color grey 
        .center
            width 100vw
            overflow hidden
            margin 0 auto
            img 
                width 100%
        .down
            width 100vw
            height 36vh
            display flex 
            justify-content space-around
            padding-top 5vw
            a 
                background none 
                border 1px solid red 
                border-radius 15px
                height  40px
                width 40vw
                text-align center 
                padding-top 2vw
</style>