<template>
  <div class="loading">
      <img width="24" height="24" src="./loading.gif">
      <p class="desc">{{desc}}</p>
  </div>
</template>

<script>


export default {
  name: "Loading",
//   data(){
//       return{
//           desc:'正在拼命加载中......'
//       }
//   }

  props:{
      desc: {
          type:String,
          default:'正在拼命加载中......'
      }
  }
  
  
};
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"

.loading{
    width: 100%;
    text-align: center;
    .desc{
        line-height: 20px
        font-size: $font-size-small
        color: $color-text-l
    }
      
}
    
</style>
