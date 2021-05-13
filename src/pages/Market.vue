<template>
    <div class="mainbody">
        <div class="headertop">
            <span>商城</span>
        </div>
        <div class="headerwrapper">
            <router-link to="/market/machinemarket" class="myinfo" >
                <span>矿机商城</span>
            </router-link>
            <router-link to="/market/mymachine" class="myloginpwd" >
                <span>我的矿机</span>
            </router-link>
        </div>
        <router-view></router-view>
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
    a 
        color #fff
    .headertop
        width 100%
        height 45px
        font-size 20px
        text-align center
        padding-top 10px
    .headerwrapper
        display flex
        justify-content space-around
        padding 10px 0
        border-bottom 1px solid rgba(255,255,255,.5)
        font-size 12px
</style>