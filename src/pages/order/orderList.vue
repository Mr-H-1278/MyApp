<template>
    <div>
        <HeaderTop title="交易中心"/>
        <div class="body">
            <ul>
                <li v-for="(blist,index) in buy" :key="index">
                    <div class="coinlist">
                        <div class="left">
                            <p>信用分：{{blist.credit}}</p>
                            <p>单价：{{blist.price}} CNY</p>
                            <p>姓名：{{blist.name}}</p>
                        </div>
                        <div class="middle">
                            <p>数量：{{blist.sellcount}}</p>
                            <p>总价：{{blist.price*blist.sellcount}}</p>
                            <p>电话：{{blist.phone}}</p>
                        </div>
                        <div class="right">
                            <button @click="showbuy">出售</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="neizhuan" v-show="isshowbuy">
            <div class="topimg">
                <img src="./images/2.jpg" >
                <span @click="$router.replace('/myOrder')">明细</span>
                <span @click="closebuy" style="top:22vw;">返回</span>
            </div>
            <div class="gongneng">
                <input type="text" placeholder="请输入用户名" v-model="name">
                <input type="text" placeholder="请输入要转账的虚拟币数量" v-model="num">
                <input type="text" placeholder="请输入对方的账户信息" v-model="info">
                <span>LV1 * 50.00%</span>
            </div>
            <button @click="huazhuan">立即划转</button>
        </div>
                <AlertTip v-show="alertShow" :alertText="alertText" @closeTip="closeTip"/>
    </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
import {mapState} from "vuex"
import AlertTip from "../../components/AlertTip/AlertTip.vue"
export default {
    data(){
        return{
            isshowbuy:false,
            num:"",
            info:"",
            name:"",
            alertShow:false,
            alertText:""
        }
    },
    components:{
        HeaderTop,
        AlertTip
    },
    mounted(){
        this.$store.dispatch("getbuylist");
    },
    computed:{
        ...mapState(["buy","detailbtc"])
    },
    methods:{
        showbuy(){
            this.isshowbuy = true;
        },
        closebuy(){
            this.isshowbuy = false;
        },
        closeTip(){
            this.alertShow = false;
            this.alertText = "";
        },
        huazhuan(){
            let gongneng = document.getElementsByClassName("gongneng")[0];
            let inputs = gongneng.children;
            var rel1 = /[1-9]/i;
            let rel2 = /[a-zA-Z]/i
            if(!rel2.test(this.name)){
                this.alertShow = true;
                this.alertText = "请输入正确的用户名";
                return
            }
            if(!rel1.test(this.num)){
                this.alertShow = true;
                this.alertText = "请输入正确的内转数量";
                return
            }
            if(!rel1.test(this.info)){
                this.alertShow = true;
                this.alertText = "请输入正确的账号"
                return
            }
            if(rel1.test(this.num)){
                this.detailbtc.push(this.num);
            }
            for(let i=0;i<inputs.length;i++){
                inputs[i].value = "";
            }
        }
    }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"

    .body   
        height  90vh
        background-color #232131
        color #fff
        top-border-1px(#fff)
        overflow auto 
        ul 
            li
                .coinlist
                    display flex 
                    justify-content space-between
                    width 100vw
                    background-color #09161f
                    box-shadow 0 0  5px #fff 
                    margin-bottom 10px
                    padding 5px
                    button
                        background-color blue   
                        border none 
                        border-radius 10px
                        height 8vw
                        width 15vw    
                        margin-top 8vw
    .neizhuan 
        position absolute
        background-color #09161f;
        width 90vw
        height 80vw
        top 50vw
        left 50%
        transform translateX(-50%)
        box-shadow 0 0 20px rgba(255,255,255,.5)
        border none
        border-radius 20px
        .backgroundshadow
            background-color rgba(0,0,0,.5)
        .topimg
            border none 
            border-radius 20px
            overflow hidden
            position relative
            img 
                width 90vw
                height 30vw
            span 
                color #fff
                position absolute
                right 5vw
                top 3vw
                border none 
                background none 
                font-size 15px
        .gongneng
            width 80vw
            margin 0 auto 
            height 40vw
            input 
                width 100%
                height 10vw
                margin-top 1.5vw
                border none 
                border-radius 10px
                padding 0 20px
            span 
                float right
                padding 0 10px
                font-size 12px
                margin-top 5px
                color #fff
        button 
            width 60vw
            margin 5px 0 0 15vw
            border-radius 25px
            color #fff
            background-color rgba(0,255,255,.5)
</style>