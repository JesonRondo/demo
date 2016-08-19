<template>
  <view class="item">
    <a class="thumb" :href="item.link">
      <image class="image" :src="item.img.img" placeholder="http://s17.mogucdn.com/p1/160816/idid_ifrtmn3fgftdkobwmezdambqhayde_220x330.png" />
    </a>
    <view class="bottom">
      <a class="title" :href="item.link">
        <label class="titleText">{{item.title}}</label>
      </a>
      <view class="extInfo">
        <label class="price">￥{{item.price}}</label>
        <view class="star">
          <image class="starImage" src="http://s18.mogucdn.com/p1/160329/upload_ifqtazjumnsggnzzg4zdambqgyyde_26x23.png" />
          <label class="starNumber">{{item.cfav}}</label>
        </view>
        <view class="moreInfo" @click="toggleSimilar">
          <label class="moreInfoLabel">...</label>
        </view>
      </view>
    </view>
    
    <view v-if="isSimilarShow" class="similar">
      <template v-if="item.hasSimilarity">
        <a class="find" :href="item.similarityUrl">
          <label class="findText">找相似>></label>
        </a>
      </template>
      <template v-if="!item.hasSimilarity">
        <View class="find">
          <label class="findText">无相似</label>
        </View>
      </template>
      <view class="shopInfo" @click="toggleSimilar">
        <!--TODO 上升和下降判断 -->
        <label class="shopName">{{item.shopSeller || ''}}</label>
        <view class="rank">
          <view class="rankItem">
            <label class="rankItemText">描述</label>
            <label class="rankItemScore">{{item.shopDsr.descDsr || '暂无'}}</label>
            <image class="rankItemImage" :src="descDsrImage" />
          </view>
          
          <view class="rankItem">
            <label class="rankItemText">质量</label>
            <label class="rankItemScore">{{item.shopDsr.qualityDsr || '暂无'}}</label>
            <image class="rankItemImage" :src="qualityDsrImage" />
          </view>
          
          <view class="rankItem">
            <label class="rankItemText">服务</label>
            <label class="rankItemScore">{{item.shopDsr.serviceDsr || '暂无'}}</label>
            <image class="rankItemImage" :src="serviceDsrImage" />
          </view>
          
          <view class="rankItem">
            <label class="rankItemText">价格</label>
            <label class="rankItemScore">{{item.shopDsr.priceDsr || '暂无'}}</label>
            <image class="rankItemImage" :src="priceDsrImage" />
          </view>
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
import style from './style.js'
import PubSub from '../pubsub'

const upImage = 'http://s17.mogucdn.com/p1/160329/upload_ifrteytfmrsggnzzg4zdambqhayde_19x19.png'
const downImage = 'http://s17.mogucdn.com/p1/160329/upload_ifqtsmtemnsggnzzg4zdambqgyyde_19x20.png'

export default {
  props: {
    item: Object
  },
  created() {
    PubSub.on('h-scroll', () => {
      this.isSimilarShow = false
    })
  },
  data() {
    return {
      style,
      isSimilarShow: false
    }
  },
  computed: {
    descDsrImage() {
      return Number(this.item.shopDsr.descDsr) >= Number(this.item.shopDsr.tagDescDsr) ? upImage : downImage
    },
    qualityDsrImage() {
      return Number(this.item.shopDsr.qualityDsr) >= Number(this.item.shopDsr.tagQualityDsr) ? upImage : downImage
    },
    serviceDsrImage() {
      return Number(this.item.shopDsr.serviceDsr) >= Number(this.item.shopDsr.tagServiceDsr) ? upImage : downImage
    },
    priceDsrImage() {
      return Number(this.item.shopDsr.priceDsr) >= Number(this.item.shopDsr.tagPriceDsr) ? upImage : downImage
    }
  },
  methods: {
    //切换显示店铺信息
    toggleSimilar() {
      this.isSimilarShow = !this.isSimilarShow
    }
  }
}
</script>