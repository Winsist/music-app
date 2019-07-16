<template>
  <div class="m-header">
      <header class="header">
          <img src="../../common/images/main.png" alt="">
          <span>Mengyun Music</span>
      </header>
  </div>
</template>

<script>
export default {
  name: 'MHeader',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="stylus">
// @import "~common/stylus/variable"
.m-header{
    .header{
        height .5rem;
        line-height .5rem;
        text-align center;
        font-size .16rem;
        img{
            width .5rem;
            vertical-align middle;
        }
        span{
            display:inline-block;
            color:pink;
        }
    }
}
</style>
