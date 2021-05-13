<template>
    <div class="mainb">
        <ul>
            <li>
                <span>用户名</span> <span class="definfo">{{myname}}</span>
            </li>
            <li>
                <span>推荐人</span> <span class="definfo">17770845413</span>
            </li>
            <li>
                <span>真实姓名</span> <span class="definfo" >{{name}}</span>
            </li>
            <li>
                <span>支付宝</span> <span class="definfo">{{myphone}}</span>
            </li>
            <li>
                <span>微信</span> <span class="definfo">{{myname}}</span>
            </li>
            <li>
                <span>银行卡号</span>  <span class="definfo" >{{bankcard}}</span>
            </li>
        </ul>
        <button @click="submitinfo">返回</button>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState(["myphone","name","wechat","bankcard","myname"])
    },
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