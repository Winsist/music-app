<template>
  <div class="singer">
      <ul>
        <li v-for="item of singer">{{item.singer_name}}</li>
      </ul>
  </div>
</template>

<script>
// import Scroll from "components/base/scroll/scroll";
import {getSingerList} from 'api/singer'
import axios from "axios";
export default {
  name: 'Singer',
  data () {
    return {
      singer:[]
    }
  },
  created(){
    this._getSingerList();
  },
 
  methods:{
    _getSingerList() {
      let baseUrl ="https://www.easy-mock.com/mock/5d1c0356d75c2c7e8bb70c1e/wmy150330/";
      axios.get(baseUrl + "singer").then(res => {
        // this.songList = res.data.data.list;
        this.singer=res.data.singerList.data.singerlist;
        // console.log(res.data.singerList.data.singerlist)
      });
    },
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
.singer{
  font-size: 0.16rem;
  position: fixed;
  width: 100%;
  top: .88rem;
  bottom: 0;
  // padding-bottom: .15rem; 
}
</style>
