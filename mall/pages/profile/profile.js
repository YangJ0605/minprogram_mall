// pages/profile/profile.js
Page({
  data: {
    orderList: [
      { icon: 'message.png', info: '联系客服' },
      { icon: 'pointer.png', info: '积分商城' },
      { icon: 'vip.png', info: '会员卡' },
    ],
    serviceList: [
      { icon: 'cart.png', info: '我的购物车' },
      { icon: 'app.png', info: '下载购物APP' },
    ]
  },
  handleContact (e) {
    console.log(e)
  },
  onLoad: function (options) {
    
  },
})