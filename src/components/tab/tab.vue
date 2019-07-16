<template>
  <div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">
          <span class="tab-link">推荐</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/singer">
          <span class="tab-link">歌手</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/rank">
          <span class="tab-link">排行</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/search">
          <span class="tab-link">搜索</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
.tab{
    font-size 0;
    text-align center;
    margin-top .1rem;
    .tab-item{
        display inline-block;
        font-size .14rem;
        width 25%;
        .tab-link{
            color #fff;
           padding 0 .1rem .04rem .1rem;
        }
        &.router-link-exact-active{
            .tab-link{
                color pink;
                border-bottom .02rem solid pink;
            }    
        }    
    }
}
</style>
