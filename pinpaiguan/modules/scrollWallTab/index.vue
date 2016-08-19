<template>
  <view v-ref:wrap class="wrap">
    <view v-ref:container class="container" _style="position: {{position}}">
      <scrollview class="scroller" v-ref:scroller force-scroll-animate="true">
        <template v-for="item, index of items">
          <view class="item" @click="select(item.id, index, $event)" v-ref:tabs>
            <label class="itemName" _class="{{ index === activeIndex ? 'active' : '' }}">{{item.title}}</label>
            <view v-if="currentId == item.id" class="feLine"></view>
          </view>
        </template>
      </scrollview>
      <view class="bgLine"></view>
    </view>
  </vie>
</template>

<script>
import style from './style.js'
import Pubsub from '../pubsub'

export default {
  props: {
    items: Array
  },
  data() {
    return {
      style,
      activeIndex: 0,
      currentId: '',
      fixed: false
    }
  },
  //自动请求第一个tab
  created() {
    this.select(this.items[0].id, 0)
    Pubsub.on('h-scroll', (e) => {
      const wrap = this.$refs.wrap
      const container = this.$refs.container
      if(e.target.scrollTop >= wrap.offsetTop) {
        if(this.fixed) return 
        this.fixed = true
        document.body.appendChild(container)
      } else {
        if(!this.fixed) return
        this.fixed = false
        wrap.appendChild(container)
      }
    })
  },
  computed: {
    position() {
      return this.fixed ? 'absolute' : 'relative'
    }
  },
  methods: {
    select(id, index, event) {
      id = String(id)
      this.currentId = id
      this.$parent.changeCid(id)
      this.activeIndex = index
      if(event) {
        const tab = this.$refs.tabs[index]
        const scroller = this.$refs.scroller
        const scrollLeft = scroller.scrollLeft
        const offsetLeft = tab.offsetLeft
        const offsetWidth = tab.offsetWidth
        //标签中心到屏幕左侧的距离
        const left = offsetLeft - scrollLeft + offsetWidth/2
        //需要移动的距离
        const toMove = left - scroller.offsetWidth/2
        setTimeout(() => {
          scroller.setScrollLeft(scrollLeft + toMove)
        }, 0)
      }
      
      //悬浮状态下，切换tab，滚动页面
      if(this.fixed && this.$refs.wrap) {
        const scrollTop = this.$root.$el.scrollTop
        const offsetTop = this.$refs.wrap.offsetTop
        if(scrollTop !== offsetTop) {
          this.$root.$el.setScrollTop(offsetTop)
        }
      }
      // this.$root.el.scrollTop = this.$refs.wrap.offsetTop
    }
  }
}
</script>