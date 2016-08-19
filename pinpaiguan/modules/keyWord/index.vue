<template>
  <view class="container">
    <view class="head">
      <image class="headImage" src="http://s17.mogucdn.com/p1/160415/upload_ifqteobymy4wkmdgg4zdambqgyyde_313x10.png" />
      <label class="title">品牌精选</label>
    </view>
    <view class="body">
      <template v-for="item,index of items">
        <a class="item" :href="item.link" :c="ptpc" :d="String(index)" :acm="item.acm">
          <image class="itemImage" :src="item.image" />
          <label class="itemName">{{item.title}}</label>
        </a>
      </template>
    </view>
  </view>
</template>

<script>
import style from './style.js'

export default {
  props: {
    items: Array
  },
  data() {
    return {
      style
    }
  },
  computed: {
    ptpc() {
      return '_rmc_' + this.sourcekey 
    }
  }
}
</script>