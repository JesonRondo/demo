<template>
  <View class="container">
    <View class="head">
      <label class="title">店铺焕新</label>
    </View>
    <scrollview class="scrollView">
      <template v-for="item,index of items">
        <a class="scrollItem" :href="item.link" :c="ptpc" :d="String(index)" :acm="item.acm">
          <image class="itemImage" :src="item.image" />
        </a>
      </template>
    </scrollview>
  </View>
</template>

<script>
import style from './style.js'

export default {
  props: {
    items: Array,
    sourcekey: Number
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