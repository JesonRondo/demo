//index.js
var app = getApp()
Page({
  data: {
    motto: '',
    isRoll: false,
    rollTimes: 0,
    userInfo: {}
  },
  roll: function(from, to) {
    if (to === from) {
      return to
    }

    if (to < from) {
      from = [to, to = from][0]
    }

    return Math.round(Math.random() * (to - from)) + from
  },
  go: function() {
    // 好多重复点击，不知道是不是bug，加个锁先
    var that = this
    if (that.lock) return
    that.lock = true

    that.setData({
      isRoll: true,
      rollTimes: that.data.rollTimes + 1,
      motto: that.getNavigator()
    })

    setTimeout(function() {
      that.lock = false
    }, 300)
  },
  getNavigator: function() {
    var crossStreet, shopSort, forkTimes,
      turnInfo = []

    var msg = ''

    var isEvening = (new Date().getHours() >= 16)

    crossStreet = this.roll(0, 1)
    shopSort = this.roll(1, 8)
    forkTimes = this.roll(0, isEvening ? 2 : 1) // 中午时间短，需要近一点

    for (var i = 0; i < forkTimes; i++) {
      turnInfo.push({
        sort: this.roll(1, 2),
        isLeft: this.roll(0, 1)
      })
    }

    var turnInfoLen = turnInfo.length
    for (var i = 0; i < turnInfoLen; i++) {
      var direction = turnInfo[i].isLeft ? '左转' : '右转'
      msg += '直走到第' + turnInfo[i].sort + '个' + direction + '路口' + direction + '，'

      if (i !== turnInfoLen - 1) {
        msg += '然后'
      }
    }

    if (crossStreet) {
      msg += '过街后' 
    }

    msg += '一直直走路边第' + shopSort + '家'

    return msg
  },
  onLoad: function() {
    this.setData({
      userInfo: {
        userName: '布吉'
      }
    })

    // var that = this
  	//调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo) {
    //   console.log(userInfo);
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    //   that.update()
    // })
  }
})
