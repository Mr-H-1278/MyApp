<template>
    <div>
        <HeaderTop title="订单"/>
        <div class="body">
            <ul>
                <li v-for="(dbtc,index) in detailbtc" :key="index">
                    <div class="btcleft">
                        <p class="btc">btc</p>
                        <p>{{time}}</p>
                    </div>
                    <div class="numright">
                        <span>-{{dbtc}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
import {mapState} from "vuex"
export default {
    data(){
        return{
            time:""
        }
    },
    computed:{
        ...mapState(["detailbtc"])
    },
    components:{
        HeaderTop
    },
    mounted(){
        let nowtime = Date();
        this.time = nowtime.slice(0,24) ;
    }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"
.body
    ul 
        li
            display flex 
            justify-content space-between
            width 100vw
            padding 5vw 5vw 0 5vw
            bottom-border-1px(#fff)
            .btcleft
                color grey
                .btc
                    color #fff
                    font-size 20px
            .numright
                font-size 25px
                color green
</style>