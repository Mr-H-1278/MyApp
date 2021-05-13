import state from "./state";
import Vue from "vue"
export default {
    //获取商家商品信息
    GetComputerList(state,{computer}){
        state.computer = computer;
    },
    //获取商家评论信息
    GetBuyList(state,{buy}){
        state.buy = buy;
    },
}