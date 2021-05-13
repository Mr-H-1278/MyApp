<template>
    <div class="mainbody">
        <div class="headertop">
            <span>联系客服</span>
        </div>
        <div class="callus">
            <p>输入你想说的话</p>
            <textarea name="words" id="words" cols="50" rows="10"></textarea>
            <button class="sendmessage" @click="sendmessage">发送信息</button>
        </div>
        <div class="back">
            <button @click="$router.replace('/personal')">返回</button>
        </div>
        <AlertTip v-show="alertShow" :alertText="alertText" @closeTip="closeTip"/>
    </div>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip.vue"
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
        sendmessage(){
            var words = document.getElementById("words");
            var wordstart = 0;
            var wordend = words.selectionEnd;
            if(wordstart == wordend){
                this.alertShow = true;
                this.alertText = "请输入后再提交"
            }else{
                this.alertShow = true;
                this.alertText = "您的问题已经提交，我们会即使回复您，谢谢"
                words.value = "";
            }
        },
        closeTip(){
            this.alertShow = false;
            this.alertText = "";
        }
    }
}
</script>

<style lang="stylus">
.mainbody
    background-color #fff
    color black
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
    .callus
        width 90vw
        height 65vw
        border 1px solid rgba(0,0,0,.1)
        margin-top 30px
        box-shadow 0 0 5px rgba(0,0,0,.3)
        position relative
        p
            color rgb(128,128,128)
            margin-top 5px
            margin-left 5px
        #words
            width 84vw
            height 40vw
            margin-left 3vw
            border 1px solid rgba(0,0,0,.2)
        .sendmessage
            position absolute
            right 3vw
            bottom 3vw
            height 30px
            border none 
            border-radius 7px
            background-color rgba(0,0,200,.5)
            color #fff
    .back
        position absolute
        top 95vw
        button  
            width 90vw
            height 10vw
            border none 
            border-radius 10px
</style>