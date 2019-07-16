<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-scroll" :data="songList">
      <div>
        <slide></slide>
        <div class="hot">
          <h4>热门歌单推荐</h4>
          <ul>
            <li v-for="(item,index) of songList" :key="index">
              <img v-lazy="item.imgurl" width="60" height="60">
              <div class="song">
                <h5 class="name">{{item.creator.name}}</h5>
                <p class="desc">{{item.dissname}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-wrapper" v-show="!songList.length">
        <loading :desc="desc"></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slide from "components/base/slide/slide";
import Scroll from "components/base/scroll/scroll";
import Loading from "components/base/loading/loading";
import axios from "axios";
export default {
  name: "Recommend",
  components: {
    Slide,
    Scroll,
    Loading
  },
  data() {
    return {
      songList: [],
      flag:false,
      desc:'正在载入......'
    };
  },
  created() {
    this._getHotSongs();
  },

  methods: {
    _getHotSongs() {
      let baseUrl =
        "https://www.easy-mock.com/mock/5d1c0356d75c2c7e8bb70c1e/wmy150330/";
      axios.get(baseUrl + "hotsongs").then(res => {
        this.songList = res.data.data.list;
        // console.log(res.data.data.list)
      });
    },
    // loadimg(){
    //   if(!this.checkloaded){
    //     this.$refs.scroll.refresh();
    //     this.checkloaded=true;
    //   }
    // }
  }
};
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.recommend {
  font-size: 0.16rem;
  position: fixed;
  width: 100%;
  top: .88rem;
  bottom: 0;
  padding-bottom: .15rem;
  .recommend-scroll {
    height: 100%;
    overflow: hidden;
    .hot {
      margin-top: 0.15rem;
      h4 {
        font-size: 0.13rem;
        text-align: center;
        color: pink;
        margin-bottom: 0.2rem;
      }

      ul {
        font-size: 0.13rem;

        li {
          margin: 0.15rem;
          // display flex;
          img {
            display: inline-block;
            vertical-align: top;
            border: 0.01rem solid pink;
            // width .6rem;
            // flex 0 0 .6rem;
          }

          .song {
            display: inline-block;
            // display flex;
            // flex 1;
            // flex-direction column;
            margin-left: 0.1rem;

            @media (max-device-width: 320px) {
              width: 73%;
            }

            @media (min-device-width: 375px) {
              width: 78%;
            }

            // position relative;
            .name {
              margin-top: 0.05rem;
              margin-bottom: 0.1rem;
              // position absolute;
            }

            .desc {
              font-size: 0.12rem;
              color: $color-text-l;
              line-height: 0.2rem;
              two-dot();
            }
          }
        }
      }
    }
    .loading-wrapper{
      position absolute;
      top 50%;
      left 50%;
      transform:translate(-50%,-50%)
    }
  }
}
</style>
