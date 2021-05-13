<template>
    <div class="main">
        <div class="headertop">
            <span>实名认证</span>
        </div>
        <ul>
            <li>
                <span>姓名</span> <input type="text" class="definfo" placeholder="请输入真是姓名" v-model="tname" v-if="!name">
                                    <p class="definfo" v-else>{{name}}</p>        
            </li>
            <li>
                <span>身份证号码</span> <input type="text" class="definfo" placeholder="请输入真是身份证号码" v-model="tidcard" v-if="!idcard">
                                    <p class="definfo" v-else>{{idcard}}</p>  
            </li>
            <li>
                <span>银行卡号</span> <input type="text" class="definfo" placeholder="请输入银行卡号" v-model="tbankcard" v-if="!bankcard">
                                    <p class="definfo" v-else>{{bankcard}}</p>  
            </li>
        </ul>
        <div class="cdimg">
            <a href="javascript:;">
                <img src="./images/unside.png" alt="">
            </a>
            <a href="javascript:;">
                <img src="./images/back.png" alt="">
            </a>
        </div>
        <button @click="submitinfo">提交</button>
        <div class="back">
            <span class="iconfont icon-jiantou" @click="$router.replace('/personal')"></span>
        </div>
        <AlertTip v-show="alertShow" :alertText="alertText" @closeTip="closeTip"/>
    </div>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip.vue"
import {mapState} from "vuex"
export default {
    data(){
        return{
            tname:"",
            tidcard:"",
            tbankcard:"",
            alertShow:false,
            alertText:""
        }
    },
    components:{
        AlertTip
    },
    computed:{
        ...mapState(["name","idcard","bankcard"])
    },
    methods:{
        submitinfo(){
            var rel1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            var rel2 = /^([1-9]{1})(\d{14}|\d{18})$/;
            if(!this.tname){
                this.alertShow = true;
                this.alertText = "请填写真实姓名！";
                return ; 
            }
            if(!rel1.test(this.tidcard)){
                this.alertShow = true;
                this.alertText = "请填写正确的身份证号码！";
                return ; 
            } 
            if(!rel2.test(this.tbankcard)){
                this.alertShow = true;
                this.alertText = "请填写正确的银行卡号！";
                return ; 
            }
            this.$store.state.name = this.tname;
            this.$store.state.idcard = this.tidcard;
            this.$store.state.bankcard = this.tbankcard;
            this.$router.replace("/personal");
        },
        closeTip(){
            this.alertShow = false;
            this.alertText = "";
        }
    }
}
</script>

<style lang="stylus">
.main
    width 100vw
    height 100vh
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
    .cdimg
        width 100%
        height 66vh
        img 
            width 100%
            margin-top 1vh
    .back
        position absolute
        top 5vw
        left 5vw
        span 
            font-size 20px
    button 
        background-color #667bf2
        border-radius 5px
        width 90vw
        height 35px
        border none
        margin 0   
</style>