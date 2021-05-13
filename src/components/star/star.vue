<template>
<div>
    <div class="star" :class="'star-'+size" v-for="(sa,index) in starsArr" :key="index">
        <span class="star-item" :class="sa"></span>
  </div>
</div>
    
</template>

<script>
export default {
    props:{
        size:Number,
        score:String
    },
    computed:{
        starsArr(){
            var arr = [];
            //on
            const psint = parseInt(this.score);
            for(var i=0;i<psint;i++){
                arr.push("on");
            }
            //half
            if(this.score*10-psint*10>=5){
                arr.push("half");
            }
            //off
            while(arr.length<5){
                arr.push("off");
            }
            return arr;
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>