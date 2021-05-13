import ajax from "./ajax.js"
const BASE_URL = "/api"

//用户名密码登陆](#6 用户名密码登陆)
export const reqLoginPwd = (name,pwd,captcha) => ajax(BASE_URL+`/login_pwd`,{name,pwd,captcha},"POST") 
//发送短信验证码](#7 发送短信验证码)
export const reqSendCode = (phone) => ajax(BASE_URL+`/sendcode`,{phone}) 
//手机号验证码登陆](#8 手机号验证码登陆)
export const reqCodeLogin = (phone,code) => ajax(BASE_URL+`/login_sms`,{phone,code},"POST") 
//根据会话获取用户信息](#9 根据会话获取用户信息)
export const reqUserInfo = () => ajax(BASE_URL+`/userinfo`) 
//用户登出](#10 用户登出)
export const reqLogOut = () => ajax(BASE_URL+`/logout`) 
//获取矿机列表
export const reqComputer = () => ajax("/computer")
//获取订单列表
export const reqBuyList = () => ajax("/buylist")
