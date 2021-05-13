<template>
    <div class="footer-guide">
        <router-link to="/home" class="rlc">
            <div class="flexbox">
                <span class="iconfont icon-u"></span>
                <span >首页</span>
            </div>
        </router-link>
        <router-link to="/market" class="rlc">
            <div class="flexbox">
                <span class="iconfont icon-icon-test"></span>
                <span >商城</span>
            </div>
        </router-link>
        <router-link to="/order" class="rlc">
            <div class="flexbox">
                <span class="iconfont icon-icon"></span>
                <span >交易</span>
            </div>
        </router-link>
        <router-link to="/personal" class="rlc">
            <div class="flexbox">
                <span class="iconfont icon-geren1"></span>
                <span >我的</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
    .footer-guide
        .rlc
            color #999
            margin-top 5px
            .flexbox
                display flex
                flex-direction column
        .router-link-exact-active
            color #7d74f3
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        bottom 0 
        left 0 
        right 0
        height 50px
        width 100%
        background-color #232131
        display flex
        justify-content space-around
        span
            font-size 12px
            margin-bottom -4px
        .iconfont
            font-size 22px
        
</style>