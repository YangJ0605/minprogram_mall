// pages/detail/detail.js
import {
  getDetailData,

  TitlesInfo
} from '../../network/detail.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    swiperImages: [],
    titlesInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid:options.iid
    })
    this._getDetailData()
  },

  _getDetailData(){
    getDetailData(this.data.iid)
      .then(res => {
        if(res.statusCode === 200){
          const data = res.data.result
          // console.log(data)
          // 取出顶部图片
          const swiperImages = data.itemInfo.topImages
          //取出商品描述
          const titlesInfo = new TitlesInfo(data.itemInfo, data.columns, data.shopInfo.services)
          //加入地址
          titlesInfo.columns.push(titlesInfo.extra.sendAddress)

          console.log(titlesInfo)
          this.setData({
            swiperImages: swiperImages,
            titlesInfo:titlesInfo
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
    
  },
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})