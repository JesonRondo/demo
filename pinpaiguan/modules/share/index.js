//微信分享
import share from '@mogu/share/index.xcore'

export default () => {
  share.init({
    share: {
      title : '品牌是一种态度',
      url: 'http://act.mogujie.com/brandstation?ismobile=1',
      imageUrl : 'http://s17.mogucdn.com/p1/160515/upload_ifrdinzug5rdayzyhazdambqmeyde_160x160.jpg',
      content: '【蘑菇街品牌站】品牌是一种态度，让生活与美好不期而遇！'
    },
    showRightBtn: true
  })
}