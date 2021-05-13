<template>
    <div class="app">
        <div class="loginContainer" v-show="!alertShow">
            <div class="loginInner">
                <div class="login_header">
                    <h2 class="login_logo">比特币交易</h2>
                    <div class="login_header_title">
                        <a href="javascript:;" :class="{on:LoginWay}" @click="LoginWay=true">短信登入</a>
                        <a href="javascript:;" :class="{on:!LoginWay}" @click="LoginWay=false">密码登入</a>
                    </div>
                </div>
                <div class="login_content">
                    <form @submit.prevent="login">
                        <div :class="{off:!LoginWay}">
                            <div class="login_message">
                                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                                <button :disabled="!rightphone" class="get_verification" :class="{right_phone:rightphone}" @click.prevent="getver">
                                    {{ComputeTime>0 ? `已发送(${ComputeTime})` : "获取验证码"}}
                                </button>
                            </div>
                            <div class="login_verification">
                                <input type="tel" maxlength="6" placeholder="验证码" v-model="code">
                            </div>
                            <div class="login_hint">
                                温馨提示:未注册比特币交易账号的手机号，登入时将自动注册，并代表已同意
                                <a href="javascript:;">《用户服务协议》</a>
                            </div>
                        </div>
                        <div :class="{off:LoginWay}">
                            <div class="login_message">
                                <input type="text" placeholder="手机/邮箱/用户名" maxlength="11" v-model="name">
                            </div>
                            <div class="login_verification">
                                <input type="password" maxlength="8" placeholder="密码" v-model="pwd">
                                <div class="switch_button">
                                    <div class="switch_circle"></div>
                                    <span class="switch_text"></span>
                                </div>
                            </div>
                            <div class="login_message">
                                <input type="text" maxlength="6" placeholder="验证码" v-model="captcha">
                                <img src="http://localhost:4000/captcha" class="get_verification" @click="getCaptcha" ref="captcha">
                            </div>
                        </div>
                        <button class="login_submit" >登入</button>
                    </form>
                    
                    <a href="javascript:;" class="about_us">关于我们</a>
                </div>
                <a href="javascript:;" class="go_back" @click="$router.back()">
                    <span class="iconfont icon-jiantou"></span>
                </a>
            </div>
        </div>
        <AlertTip v-show="alertShow" :alertText="alertText" @closeTip="closeTip"/>
    </div>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip.vue"
import {reqSendCode,reqLoginPwd,reqCodeLogin} from "../../api"
export default {
    data(){
        return{
            LoginWay:true,//短信登入
            phone:"",
            code:"",
            name:"",
            pwd:"",
            captcha:"",
            ComputeTime:0,
            alertShow:false,
            alertText:""
        }
    },
    components:{
        AlertTip
    },
    computed:{
        rightphone(){
            return /^1\d{10}$/.test(this.phone)
        }
    },
    methods:{
        //获取验证码
        async getver(){
            if(this.ComputeTime==0){
                this.ComputeTime = 30;
                this.time = setInterval(() => {
                    this.ComputeTime--;
                    if(this.ComputeTime===0){
                        clearInterval(this.time);
                    }
                }, 1000);
            }
            //ajax请求
            const result = await reqSendCode(this.phone);
            if(result.code===1){
                this.alertShow = true;
                this.alertText = result.msg;
                clearInterval(this.time);
                this.ComputeTime = 0;
            }
        },
        //登入前台验证
        async login(){
            var result;
            if(this.LoginWay){
                const {rightphone,phone,code} = this;
                if(!rightphone){
                    this.alertShow = true;
                    this.alertText = "手机号不正确";
                    return;
                }else if(!code){
                    this.alertShow = true;
                    this.alertText = "验证码不正确";
                    return;
                }
                // result = await reqCodeLogin(phone,code);
                this.$store.state.myphone=phone;
                this.$store.state.myname="vip1用户";
            }else{
                const {name,pwd,captcha} = this;
                if(!name){
                    this.alertShow = true;
                    this.alertText = "用户名错误";
                    return;
                }else if(!pwd){
                    this.alertShow = true;
                    this.alertText = "密码错误";
                    return;
                }else if(!captcha){
                    this.getCaptcha();
                    this.alertShow = true;
                    this.alertText = "验证码错误";
                    return;
                }
                // result = await reqLoginPwd(name,pwd,captcha);
                this.$store.state.myname=name;
            }
            //console.log(result);
            if(this.$store.state.myname){
                // const user = result.data;
                this.$router.replace("/personal");
            }else{
                this.getCaptcha();
                this.alertShow = true;
                this.alertText = result.msg;
            }
            //console.log(result);
        },
        //关闭警告窗口
        closeTip(){
            this.alertShow = false;
            this.alertText = "";
        },
        //获取一次性图片验证码
        getCaptcha(){
            this.$refs.captcha.src = "http://localhost:4000/captcha?time="+Date.now();
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .off
        display none 
    .on
        color #02a774
        border-bottom 2px solid #02a774
    a
        color #000
    .app
        background-color #232131
        height 100vh
        overflow hidden 
        .loginInner
            margin-top 60px
            position relative
            .login_header
                text-align center
                .login_logo
                    color #02a774
                    font-size 40px
                .login_header_title
                    padding-top 40px
                    a
                        margin 0 20px
                        font-size 15px
                        padding 3px
            .login_content
                .login_message
                    width 100%
                    margin-top 25px
                    position relative
                    left 50%
                    transform translateX(-40%)
                    input 
                        width 80%
                        height 48px
                        padding-left 5px
                        border 1px solid rgba(200,200,200,.5)
                        border-radius 5px
                        &:focus
                            border 1px solid #02a774
                    .get_verification
                        border 0
                        height 48px
                        width 30%
                        background-color transparent
                        color #ccc
                        position absolute
                        right 18%
                        &.right_phone
                            color black 
                .login_verification
                    width 100%
                    margin-top 25px
                    text-align center
                    input
                        width 80% 
                        height 48px
                        padding-left 5px
                        border-radius 5px
                        border 1px solid rgba(200,200,200,.5)
                .login_hint
                    width 80%
                    height 20px
                    font-size 14px
                    margin 12px auto 0 auto
                    color #999
                    a
                        color #02a774
                .login_submit
                    width 80%
                    height 42px
                    background-color #4cd96f
                    margin 60px auto 0 auto
                    border-radius 5px
                    border none 
                    color #ffffff
                    display block
                    font-size 18px
                .about_us
                    display block
                    margin-top 15px
                    text-align center
                    color #999
                    font-size 12px 

        .go_back
            background-color #232131
            position absolute
            top -50px
            left 7px
            span
                font-size 25px
                opacity .7
                color #fff
</style>