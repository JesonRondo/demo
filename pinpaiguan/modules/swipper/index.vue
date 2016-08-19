<template>
  <view class="container">
    <slider :data="sliderData" :change="onSliderChange">
      <view class="indicatorWrap">
        <view class="triggerInner">
          <view class="indicator" v-for="item, index in sliderData"
            _class="{{ index === activeIndex ? 'active' : '' }}"></view>
        </view>
      </view>
    </slider>
  </view>
</template>

<script>
import style from './style.js'
import Slider from '@component/xcore-slider-image'

export default {
  components: {
    Slider
  },
  props: {
    items: Array,
    sourcekey: Number 
  },
  data() {
    return {
      style,
      activeIndex: 0,
      sliderData: []
    }
  },
  computed: {
    sliderData() {
      return this.items.map((item, index) => {
        item.img = item.image
        item.c = `_rmc_${this.sourcekey}`
        item.d = index
        return item
      })
    }
  },
  methods: {
    onSliderChange(event) {
      this.activeIndex = event.index
    }
  }
}
</script>