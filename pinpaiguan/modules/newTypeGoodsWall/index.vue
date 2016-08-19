<template>
  <listview-shadow>
    <template v-for="group of doubleItems" :key="group.id">
      <view class="line" v-show="tabid === cid">
        <good v-for="item of group.list" :item="item" :key="item.acm"></good>
      </view>
    </template>
  </listview-shadow>
</template>

<script>
import style from './style.js'
import Cookie from '@component/cookie'
import Good from './good'
import hdp from '@mogu/hdp'
import PubSub from '../pubsub'

import ajax from '@component/xcore-ajax'

//设备id
let DEVICE_ID = 'test'
const IS_NATIVE = /mogujie|xcore/.test(navigator.userAgent)

export default {
	components: {
		Good
	},
  props: {
    cid: String,
    tabid: String,
    maxprice: Number,
    minprice: Number,
    imgsize: String,
    customp: String,
    sort: String,
    tag: String
  },
  data() {
    return {
      style,
      page: 0,
      endPage: 10000,
      isLoading: false,
      isEnd: false,
      itemsCache: [],
      items: []
    }
  },
  watch: {
    //tab切换
    tabid(val, oldVal) {
      if(this.tabid === this.cid) {
        this.getDeviceId((did) => {
          DEVICE_ID = did
          this.switchDataSource()
        })
      } else {
        //切换到别的tab时，清空之前的数组，移除dom
        this.items = []
      }
    }
  },
  created() {
    let checkDelay = null
    PubSub.on('h-scroll', (e) => {
      if(this.tabid == this.cid) {
        const el = e.target
        checkDelay && clearTimeout(checkDelay)
        checkDelay = setTimeout(() => {
          if(el.scrollHeight - el.offsetHeight <= el.scrollTop + 100) {
            this.loadNextPage()
          }
        }, 50)
      }
    })
  },
  computed: {
    //把数据分成两个一行 for listview limitation
    doubleItems() {
      let dbItems = []
      this.items.forEach((item, index) => {
        if(index % 2 === 0) {
          dbItems.push({
            id: item.tradeItemId,
            list: []
          })
        }
        dbItems[dbItems.length -1].list.push(item)
      })
      return dbItems
    },
    placeholder() {
      return this.items.length === 0 ? [1] : []
    }
  },
  methods: {
    render() {
      var result = []
      for(let i = 0; i < this.page + 1; i++) {
        result = result.concat(this.itemsCache[i])
      }
      this.items = result
    },
    //切换分类cid
    switchDataSource() {
      //切换tab后，默认显示第一页，不显示全部数据
      this.page = 0
      //如果之前有取到数据
      this.$parent.setMoreLoading(true)
      if(this.itemsCache.length) {
        this.render()
        return false
      //之前没有数据
      } else {
        this.$parent.setLoading(true)
        this.fetchData(this.page, (data) => {
          this.$parent.setLoading(false)
          this.itemsCache.push(data.result.wall.docs)
          if(data.result.wall.isEnd) {
            this.endPage = this.page
          }
          this.render()
        })
      }
    },
    //加载下一页
    loadNextPage() {
      if(this.isLoading) {
        return false
      }
      //如果之前有取到数据
      const nextPage = this.page + 1
      if(this.itemsCache.length) {
        if(this.itemsCache[nextPage]) {
          this.page = nextPage
          this.render()
        } else {
          //如果数据已经全部取完
          if(this.isEnd()) {
            console.log('已经没有更多数据了')
            return false
          //如果数据没有取完
          } else {
            this.fetchData(nextPage, (data) => {
              this.page = nextPage
              this.itemsCache[nextPage] = data.result.wall.docs
              if(data.result.wall.isEnd) {
                this.endPage = nextPage
                this.$parent.setMoreLoading(false)
              }
              this.render()
            })
          }
        }
      } 
    },
    isEnd() {
      return this.page === this.endPage
    },
    //获取数据
    fetchData(page, cb) {
      const uuid = Cookie.getCookie('__mgjuuid')
      const uid = Cookie.getCookie('__ud_')
      
      if(this.isLoading) {
        return false
      }
      this.showLoading()
      ajax({
        url: "http://list.mogujie.com/search" + (this.customp || ''),
        dataType: 'jsonp',
        data: {
          action: '',
          cKey: 'h5-cube-default-v1',
          cpc_offset: '',
          fcid: this.cid,
          imageSize: this.imgsize || '',
          maxPrice: this.maxprice || '',
          minPrice: this.minprice || '',
          page: page + 1,
          tag: this.tag || '',
          ptptPartC: `_book_shopping_${this.cid}_h5-cube-default-v1_noab-noab`,
          stitle: '',
          title: '',
          _did: DEVICE_ID,
          userId: uid,
          _mgjuuid: uuid
        },
        success: (data)=> {
          this.hideLoading()
          if(data.status && data.status.code == 1001) {
            cb(data)
          }
        },
        error: (e)=> {
          this.hideLoading()
        }
      })
    },
    showLoading() {
      // if(IS_NATIVE) {
      //   hdp.do('mgj.progress.show')
      // }
      this.isLoading = true
    },
    hideLoading() {
      // if(IS_NATIVE) {
      //   hdp.do('mgj.progress.hide')
      // }
      this.isLoading = false
    },
    //获取设备id
    getDeviceId(cb) {
      if(DEVICE_ID) {
        cb(DEVICE_ID)
      } else if(IS_NATIVE) {
        hdp.do('mgj.device.signParams', {}).then((info) => {
          if (typeof info === 'string') {
            info = JSON.parse(info)
          }
          cb(info._did)
        })
      } else {
        cb('')
      }
    }
  }
}
</script>