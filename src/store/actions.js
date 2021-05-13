import {
    reqComputer,
    reqBuyList} from "../api/index.js"
export default {
    //获取矿机列表信息
    async getcomputerlist({commit}){
        const result = await reqComputer();
        if(result.code == 0){
            const computer = result.data;
            commit("GetComputerList",{computer});

        }
    },
    //获取订单列表信息
    async getbuylist({commit}){
        const result = await reqBuyList();
        if(result.code == 0){
            const buy = result.data;
            commit("GetBuyList",{buy});
        }
    },
}