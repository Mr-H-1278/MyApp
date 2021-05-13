<template>
    <div class="personal">
        <!-- 头部 -->
        <HeaderTop title="我的" style="backgroumd-color:#232131"/>
        <!-- 登入注册？ -->
        <div class="personal_number">
            <router-link to="/login" class="personal_link">
                <div class="personal_image">
                     <span class="iconfont icon-geren1"></span>
                </div>
                <div class="user_info">
                    <p class="user_info_top">{{showname ? myname : "登入/注册"}}</p>
                    <p>
                        <span class="iconfont icon-shouji icon_number"></span>
                        <span class="icon_mobile_number">
                            {{showphone ? myphone : "暂无绑定手机号"}}
                        </span>
                    </p>
                </div>
                <div class="arrow">
                    <span class="iconfont icon-jiantou1"></span>
                </div>
            </router-link>
        </div>
        <!-- 账户剩余 -->
        <div class="personal_info_data">
            <div class="info_data_list">
                <a href="javascript:;">
                    <span class="info_data_top">
                        <span>0.00</span>元
                    </span>
                    <span class="info_data_bottom">我的余额</span>
                </a>
            </div>
            <div class="info_data_list line">
                <a href="javascript:;">
                    <span class="info_data_top">
                        <span>0</span>个
                    </span>
                    <span class="info_data_bottom">我的矿机</span>
                </a>
            </div>
            <div class="info_data_list">
                <a href="javascript:;">
                    <span class="info_data_top">
                        <span>0</span>分
                    </span>
                    <span class="info_data_bottom">我的算力</span>
                </a>
            </div>
        </div>
        <!-- 服务信息 -->
        <div class="personal_my_order border-1px">
            <router-link class="my_order" to="/shiming">
                <span class="iconfont icon-shimingrenzheng" style="color:green"></span>
                <span class="my_order_div">
                    <span>实名认证</span>
                    <span class="my_order_icon iconfont icon-jiantou1"></span>
                </span>
            </router-link>
            <a href="javascript:;" class="my_order">
                <span class="iconfont icon-jiangli-" style="color:red"></span>
                <span class="my_order_div">
                    <span>奖励制度</span>
                    <span class="my_order_icon iconfont icon-jiantou1"></span>
                </span>
            </a>
            <router-link class="my_order" to="/myTeam">
                <span class="iconfont icon-tuandui-tianchong" style="color:#f90"></span>
                <span class="my_order_div">
                    <span>我的团队</span>
                    <span class="my_order_icon iconfont icon-jiantou1"></span>
                </span>
            </router-link>
            <router-link class="my_order" to="/useinfo">
                <span class="iconfont icon-xiugaiziliao" style="color:#02a774"></span>
                <span class="my_order_div">
                    <span>修改资料</span>
                    <span class="my_order_icon iconfont icon-jiantou1"></span>
                </span>
            </router-link>
            <router-link class="my_order" to="/callUs">
                <span class="iconfont icon-lianxikefu" style="color:#02a774"></span>
                <span class="my_order_div">
                    <span>联系客服</span>
                    <span class="my_order_icon iconfont icon-jiantou1"></span>
                </span>
            </router-link>
        </div>
        <button class="logout" v-show="showname" @click="logout">退出登入</button>
    </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop/HeaderTop.vue"
import {mapState} from "vuex"
export default {
    components:{
        HeaderTop
    },
    data(){
        return{
            showphone:false,
            showname:false
        }
    },
    computed:{
        ...mapState(["myphone","myname"]),
    },
    methods:{
        showmyphone(){
            if(this.myphone){
                this.showphone = ! this.showphone;
            }
        },
        showmyname(){
            if(this.myname){
                this.showname = ! this.showname;
            }
        },
        logout(){
            if(confirm("你确定要退出登入吗？")){
                this.myphone = "";
                this.myname = "";
            }
        }
    },
    mounted(){
        this.showmyname();
        this.showmyphone();
    },
    watch:{
        myname(){
            this.showmyname();
        },
        myphone(){
            this.showmyphone();
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../common/stylus/mixins.styl"
    .personal
         background-color #232131
         height 100vh
        .logout
            font-size 20px
            background-color #02a774
            color   #ffffff
            border none
            border-radius 4px 
            margin-top 35px
            padding 5px
            position absolute
            left 50%
            transform translateX(-50%)
        .header 
            height 45px
            background-color #02a774
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
                ellipsis(120px)
                color #ffffff
                text-align center
                .header_title_text
                    font-size 20px

        .personal_number
            border-top 1px solid #fff
            a
                color #ffffff
            .personal_link
                background-color #232131
                padding 20px 10px
                width 100%
                display block
                margin-top 1px
                clearFix()
                .personal_image
                    width 60px
                    height 60px
                    border-radius 50%
                    background-color #e4e4e4
                    overflow hidden
                    float left 
                    span
                        font-size 62px
                        line-height 60px
                        margin-left -1px
                .user_info
                    float left 
                    margin 8px 0 0 15px
                    p
                        margin-bottom 0
                        .icon_mobile_number
                            font-size 14px
                        .icon_number
                            font-size 14px
                    .user_info_top
                        font-size 18px
                        margin-bottom 4px
                .arrow
                    float right
                    line-height 60px
                    margin-right 10px
                    span 
                        font-size 10px
        .personal_info_data
            background-color #232131
            width 100%
            border-bottom 1px solid #fff
            border-top 1px solid #fff
            clearFix()
            display flex
            justify-content space-between
            a
                font-size 14px
                color #fff
                .info_data_top
                    width 100%
                    padding 15px 5px 10px
                    display block
                    text-align center
                    margin-top 5px
                    span 
                        font-size 35px
                        color #f90
                        line-height 30px
                .info_data_bottom
                    display block
                    width 100%
                    text-align center

            .info_data_list
                height 100px
                width 32%
            .line
                border-left 1px solid #ccc
                border-right 1px solid #ccc
                width 36%

        .personal_my_order
            background-color #232131
            margin-top 10px
            border-top 1px solid #fff
            padding 10px 0
            .my_order
                padding-left 15px
                display flex
                line-height 65px
                color #fff
                font-size 18px
                border-bottom 1px solid #fff
                .my_order_div
                    width 100%
                    border-bottom 1px solid rgba(0,0,0,.1)
                    display flex
                    justify-content space-between
                    margin-left 5px
                    .my_order_icon
                        margin-right 10px
                        opacity .5
</style>