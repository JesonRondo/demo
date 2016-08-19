<template>
  <div class="view m1_container">
    <div class="view m1_head">
        <div class="label m1_title">品牌热榜</div>
        <a href="http://act.mogujie.com/brandstationlogo?ismobile=1" :c="ptpc">
          <div class="label m1_more">查看更多></div>
        </a>
    </div>
    <div class="view m1_body">
      <div class="view m1_left">
        <template v-if="firstItem.image">
          <a class="m1_leftLink" :href="firstItem.link" :c="ptpc" :acm="firstItem.acm">  
            <img class="m1_leftImage" :src="firstItem.image" />
          </a>
          <div class="view m1_coupon" @click="getCoupon">
            <div v-if="!isGot" class="label m1_couponInner">收藏领券</div>
            <div v-else class="label m1_couponInner">已收藏</div>
          </div>
        </template>
      </div>
      <div class="view m1_right">
        <div class="view m1_rightLine">
          <a v-for="item,index of items.slice(1, 3)" class="m1_rightItem" :href="item.link" :c="ptpc" :acm="item.acm" :d="String(index)">
            <img class="m1_itemImage" :src="item.image" />
          </a>
        </div>
        <div class="view m1_rightLine">
          <a v-for="item,index of items.slice(3, 5)" class="m1_rightItem" :href="item.link" :c="ptpc" :acm="item.acm" :d="String(index)">
            <img class="m1_itemImage" :src="item.image" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .m1_container {
    width: 7.5rem;
    -webkit-flex-direction: column;
    -webkit-flex-wrap : wrap
  }
  .m1_head {
    width: 7.5rem;
    height: .86rem;
    padding-left: .44rem;
    padding-right: .44rem;
    background-color: #f6f6f6;
    -webkit-justify-content: space-between;
    align-items : center
  }
  .m1_title {
    font-size: .3rem
  }
  .m1_more {
    font-size: .24rem
  }
  .m1_body {
    -webkit-flex-direction: row;
    -webkit-flex-wrap: nowrap;
    background-color: #fff;
    -webkit-justify-content: space-between
  }
  .m1_left {
    position: relative;
    height: 4.42rem;
    width: 3.06rem
  }
  .m1_leftLink {
  }
  .m1_leftImage {
    width: 3.06rem;
    height: 4.02rem
  }
  .m1_coupon {
    -webkit-justify-content: center;
    -webkit-align-items: center;
    position: absolute;
    left: .88rem;
    top: 3.38rem;
    width: 1.3rem;
    height: .48rem;
    border-width: 1px;
    border-color: #999;
    border-radius: 3px;
  }
  .m1_couponInner {
    font-size: .22rem;
    color: #333;
    background-color: #fff
  }
  .m1_right {
    width: 4.46rem;
    height: 4.4rem;
    -webkit-flex-direction: column;
    background-color: #e5e5e5
  }
  .m1_rightLine {
    width: 4.46rem;
    height: 2.2rem;
    margin-bottom: 1px;
    -webkit-flex-direction: row
  }
  .m1_rightItem {
    width: 2.2rem;
    height: 2.2rem;
    margin-left: 1px;
    background-color: #fff
  }
  .m1_itemImage {
    width: 2.2rem;
    height: 2.2rem
  }
</style>

<script>
// import Tips from '@component/xcore-tips'

export default {
  components: {
    // Tips
  },
  props: {
    items: Array,
    sourcekey: Number
  },
  data() {
    return {
      isGot: false, //是否成功领取
      shopId: 22011183, //店铺id
      couponId: '1hv5i0kdy' //优惠卷id
    }
  },
  computed: {
    firstItem() {
      return this.items[0] || {}
    },
    ptpc() {
      return '_rmc_' + this.sourcekey 
    }
  },
  methods: {
    idToUrl(id) {
      return 1 + (id * 2 + 56).toString(36)
    },
    getCoupon() {
      // ajax({
      //   url: 'http://promotion.mogujie.com/jsonp/getPlatformCoupon/1',
      //   dataType: 'jsonp',
      //   data: {
      //     campId: this.couponId,
      //     shopId: this.idToUrl(this.shopId)
      //   },
      //   success: (data) => {
      //     let msg = ''
      //     if(data && data.success && data.returnCode === 'SUCCESS' && data.data) {
      //       msg = '成功领取'
      //       this.isGot = true
      //     //未登录
      //     } else if(data && data.returnCode === 'SESSION_INVALID') {
      //       if (/(mogujie|xcore)/i.test(navigator.userAgent)) {
      //         window.open('mgj://login')
      //       } else {
      //         let url = 'http://portal.mogujie.com/login?refer=' + encodeURIComponent(location.href)
      //         if(window.__logger) {
      //           url =  __logger.generatePtpParams(url)
      //         }
      //         window.open(url)
      //       } 
      //     //已经领取过了
      //     } else if (data && data.returnCode === '50006') {
      //       msg = data.message
      //       this.isGot = true
      //     }else {
      //       msg = data.message
      //     }
          
      //     if(msg) {
      //       this.$refs.tips.show(msg)
      //     }
      //   }
      // })
    }
  }
}
</script>