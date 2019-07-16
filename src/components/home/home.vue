<template>
  <div class="home">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'Home',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus">
// @import "~common/stylus/variable"
.home{
  //  .home-scroll{
  //    overflow-y scroll;
  //  } 
}
</style>




















