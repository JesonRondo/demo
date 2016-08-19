<template>
  <div class="listview main_container" @scroll="scrollHandler">
    <brand-hot-list :items="brandHotListData" :sourcekey="5465"></brand-hot-list>
    <!-- <horizontal-scroll :items="horizontalScrollData" :sourcekey="6064"></horizontal-scroll>
    <key-word :items="keyWordData" :sourcekey="11283"></key-word>
    <scroll-wall-tab :items="scrollWallData"></scroll-wall-tab>
    <template v-for="data in scrollWallData">
      <goods-wall :tabid="goodsWallCid" :key="data.id" :cid="String(data.id)" :imgsize="'220x330'"></goods-wall>
    </template>
    <view class="main_loading" v-show="isLoading">
      <label class="main_loadingText">正在加载中...</label>
    </view>
    <view class="main_moreLoading" v-show="isMoreLoading">
      <label class="main_loadingText">正在加载中...</label>
    </view> -->
  </div>
</template>

<style>
  .main_container {
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    /*background-color: #f6f6f6;*/
    background-color: #000;
  },
  .main_loading {
    height: 20rem;
    padding-top: .4rem;
    width: 7.5rem;
    -webkit-flex-direction: column;
    -webkit-box-orient: vertical;
  },
  .main_moreLoading {
    -webkit-flex-direction: column;
    -webkit-box-orient: vertical;
    height: 1.2rem;
    padding-top: .4rem;
    width: 7.5rem;
  },
  .main_loadingText {
    width: 7.5rem;
    text-align: center;
    color: #999;
  }
</style>

<script>
import BrandHotList from './modules/brandHotList'
import HorizontalScroll from './modules/horizontalScroll'
import KeyWord  from './modules/keyWord'
import ScrollWallTab from './modules/scrollWallTab'
import GoodsWall from './modules/newTypeGoodsWall'
import PubSub from './modules/pubsub'
import scrollWallData from './modules/scrollWallTab/data'

import ajax from '@component/xcore-ajax'

export default {
  components: {
    BrandHotList,
    HorizontalScroll,
    KeyWord,
    ScrollWallTab,
    GoodsWall
  },
  
  data() {
    return {
      swipperData : [],
      brandHotListData: [],
      horizontalScrollData: [],
      keyWordData: [],
      // scrollWallData: scrollWallData,
      goodsWallCid: '',
      isLoading: false,
      isMoreLoading: false
    }
  },
  
  created() {
    // this.isLoading = true
    // ajax({
    //   url: 'http://mce.mogucdn.com/jsonp/multiget/3?pids=6165%2C5465%2C6064%2C11283',
    //   dataType: 'jsonp',
    //   success: (data) => {
    //     if(data.success) {
    //       const d = data.data
    //       console.log(d)
    //       this.swipperData = d['6165'].list
    //       this.brandHotListData = d['5465'].list
    //       this.horizontalScrollData = d['6064'].list
    //       this.keyWordData = d['11283'].list
    //     }
    //   }
    // })
  },
  
  methods: {
    // changeCid(cid) {
    //   console.log('====> ', cid)
    //   this.goodsWallCid = cid
    // },
    scrollHandler(e) {
      PubSub.emit('h-scroll', e)
    },
    // //切换图墙tab时loading
    // setLoading(isLoading) {
    //   this.isLoading = isLoading 
    // },
    // //加载下一页的loading
    // setMoreLoading(isLoading) {
    //   this.isMoreLoading = isLoading
    // }
  }
}
</script>
