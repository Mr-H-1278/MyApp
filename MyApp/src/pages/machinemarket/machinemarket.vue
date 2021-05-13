<template>
    <div class="mainbody">
        <div class="head">
            <p>矿机商城</p>
        </div>
        <div class="body">

            <div class="machinetype" v-for="(com,index) in computer" :key="index">
                <div class="left">
                    <span class="iconfont icon-jisuanjiyingjianComputerHardware101"></span>
                </div>
                <div class="middle">
                    <p>{{com.name}}</p>
                    <ul>
                        <li>价格：{{com.Price}} btc</li>
                        <li>周期：{{com.rankRate}} 小时</li>
                        <li>总产量：{{com.totle}} btc</li>
                    </ul>
                </div>
                <div class="right">
                    <span>产量：{{com.workrate}} btc/时</span>
                    <button @click="isbuy">兑换</button>
                    <span>购买上限：{{com.maxbuy}}</span>
                </div>
            </div>

        </div>
        <AlertTip v-show="alertShow" :alertText="alertText" @closeTip="closeTip"/>
    </div>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip.vue"
import {mapState} from "vuex"
export default {
    data(){
        return {
            alertShow:false,
            alertText:""
        }
    },
    components:{
        AlertTip
    },
    methods:{
        isbuy(){
            this.alertShow = true ;
            this.alertText = "你确定要购买这个矿机吗";        },
        closeTip(){
            this.alertText = "";
            this.alertShow = false;
        }
    },
    mounted(){
        this.$store.dispatch("getcomputerlist");
    },
    computed:{
        ...mapState(["computer","isshowmachine"])
    }
}
</script>

<style lang="stylus">
.mainbody
    height 100%
    .head
        margin-left -15px
        margin-top 15px
        p
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
                p
                    font-size 14px
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