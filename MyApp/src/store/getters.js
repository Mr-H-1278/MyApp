export default {
    totleCount(state){
        return state.cartFoods.reduce((lastcount,thisfood)=> lastcount + thisfood.count , 0);
    },
    totlePrice(state){
        return state.cartFoods.reduce((lastcount,thisfood)=> lastcount + thisfood.count*thisfood.price , 0);
    }
}