<template>
    <div class="mainb">
        <ul>
            <li>
                <span>原密码</span> <input type="password" class="definfo" placeholder="请输入原交易密码">
            </li>
            <li>
                <span>新密码</span> <input type="password" class="definfo" placeholder="请输入新交易密码">
            </li>
            <li>
                <span>新密码</span> <input type="password" class="definfo" placeholder="请确认新交易密码">
            </li>
        </ul>
        <button @click="submitinfo">提交</button>
    </div>
</template>

<script>
export default {
    methods:{
        submitinfo(){
            this.$router.replace("/personal");
        }
    }
}
</script>

<style lang="stylus">
.mainb
    width 90vw
    height  100vh
    overflow hidden 
    ul
        padding-top 2vw
        li
            position relative
            padding 15px 0
            border-bottom 1px solid rgba(255,255,255,.5)
            input 
                position absolute
                right 5vw
                width 60vw
                background-color #232232 
                height 30px
                top 3vw
                border none
            .definfo
                position absolute
                right 5vw 
                width 60vw
                height 30px
                top 4vw
                font-size 15px
    button 
        background-color #667bf2
        border-radius 5px
        width 90vw
        height 35px
        border none
</style>