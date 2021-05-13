<template>
    <div class="mainbody">
        <div class="headertop">
            <span>我的团队</span>
        </div>
        <div class="info">
            <div class="teamnum">
                <span class="num">直推人数</span>
                <span class="data">0</span>
            </div>
            <div class="teamnum">
                <span class="num">团队人数</span>
                <span class="data">0</span>
            </div>
        </div>
        <div class="detailnum">
            <span>我的直推</span>
        </div>
        <div class="back">
            <span class="iconfont icon-jiantou" @click="$router.replace('/personal')"></span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
.mainbody
    background-color #232131
    color #fff
    padding 0 5vw
    height 100vh
    a 
        color #fff
    .headertop
        width 100%
        height 45px
        font-size 20px
        text-align center
        padding-top 10px
    .info
        width 90vw
        height 25vw
        background-color #667bf2
        border-radius 5px
        margin-top 20px
        display flex 
        justify-content space-around
        .teamnum
            width 100%
            position relative
            .num
                display block
                position absolute
                top 25%
                left 50%
                transform translateX(-50%)
                font-size 12px
            .data
                display block
                position absolute
                top 50%
                left 50%
                transform translateX(-50%)
                font-size 25px
    .detailnum
        margin-top 5vw
        span 
            font-size 12px
            border-left 3px solid #667bf2
            padding-left 5px
    .back
        position absolute
        top 5vw
        left 5vw
        span 
            font-size 20px
</style>