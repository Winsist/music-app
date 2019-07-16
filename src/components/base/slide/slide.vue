<template>
  <div class="slide">
      <swiper :options="swiperOption" v-if="imgList.length">
          <!-- slides -->
            <swiper-slide v-for="imgItem in imgList" :key="imgItem.id">
              <!-- <router-link to="/singer">
                <img :src="imgItem.picUrl" > 
              </router-link> -->
              <a :href="imgItem.linkUrl">
                <img :src="imgItem.picUrl" > 
              </a>
            </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
// import axios from "axios"
// import {slideurl} from '../../../common/js/sildeurl.js'
export default {
  name: 'Slide',
  data () {
    return {
      imgList:[],
      swiperOption:{
        pagination: '.swiper-pagination',
        autoplay:3000,//自动轮播
        loop:true
        }
    }
  },
  created(){
    this._getRecommend();
  },
 
  methods:{
    _getRecommend() {
      getRecommend().then((res)=>{
        if(res.code==0){
          this.imgList=res.data.slider;
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
.slide >>> .swiper-pagination-bullet-active{
  background pink;
  border-radius 40%;
  width .12rem;
}
.slide{
  width 100%
  height 0
  padding-bottom 40%
  margin-top .07rem
  img{
    width 100%;
    // margin 0 5%;
    // border-radius 5px
  }
}
</style>
