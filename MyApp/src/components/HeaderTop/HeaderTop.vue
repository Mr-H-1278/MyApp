<template>
    <header class="header">
        <slot name="left" class="header_search"></slot>
        <span class="header_title">
            <span class="header_title_text">{{title}}</span>
        </span>
        <slot name="right" class="header_login"></slot>
    </header>
</template>

<script>
export default {
    props:{
        title:String
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
    .header 
        height 45px
        background-color  #232131
        position relative
        line-height 45px
        .header_search
            position fixed
            left 15px
            span 
                font-size 25px
                color #ffffff
        .header_login
            position fixed
            right 15px
            span 
                color #ffffff
                font-size 15px
        .header_title
            position fixed
            left 50%
            transform translateX(-50%)
            color #ffffff
            .header_title_text
                font-size 20px
                text-align center
                display block
                ellipsis(120px)
</style>