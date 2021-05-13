<template>
    <div class="mainbody">
        <div class="head">
            <div class="left">
                <p>运行中商城</p>
            </div>
            <div class="right" @click="showmachine">
                <a href="#" >一键开启</a>
            </div>
        </div>
        <div class="body" v-show="isshowmachine">
            <div class="machinetype" v-for="(com,index) in computer" :key="index">
                <div class="left">
                    <span class="iconfont icon-jisuanjiyingjianComputerHardware101"></span>
                </div>
                <div class="middle">
                    <p>{{com.name}}</p>
                    <p>{{com.intr}}</p>
                </div>
                <div class="right">
                    <span>产量：{{com.workrate}} btc/时</span>
                    <span style="color:red;">{{com.isrun}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            isshowmachine:false
        }
    },
    mounted(){
        this.$store.dispatch("getcomputerlist");
        console.log(this.computer);
    },
    computed:{
        ...mapState(["computer"])
    },
    methods:{
        showmachine(){
            this.isshowmachine = true;
        }
    }
}
</script>

<style lang="stylus">
.mainbody
    height 100%
    .head
        margin-left -15px
        margin-top 15px
        display flex 
        justify-content space-between
        p
            border none 
            border-left 3px solid #6874f1
            padding-left 10px
            font-size 12px
        a
            border none 
            border-left 3px solid #6874f1
            padding-left 10px
            font-size 12px
    .body
        height 90vh
        margin-top 20px
        .machinetype
            display flex 
            background-color #2a2b3d
            justify-content space-between
            font-size 12px
            margin-bottom 20px
            padding 5px
            .left
                margin-left 2vw
                margin-top 4vw
                span 
                    font-size 40px
                    color rgba(0,200,200,.5)
            .middle
                margin-left -10vw
                width 30vw
                p
                    font-size 12px
                    padding-top 2vw
                ul 
                    li 
                        font-size 10px
                        color grey
            .right 
                display flex 
                justify-content space-around
                flex-direction column
                margin-right 3vw
                button 
                    background-color #6874f1
                    border none 
                    padding 2px
                    border-radius 5px
                span 
                    font-size 10px
                    color grey
</style>