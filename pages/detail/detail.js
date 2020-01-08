// pages/detail/detail.js
import {
  getDetailData,
  // getRecommend,
  getReal,
  ShopInfo,
  TitlesInfo,
  ParamInfo
} from '../../network/detail.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    swiperImages: [],
    titlesInfo:{},
    shopInfo:{},
    detailInfo:{},
    paramInfo:{},
    commentsInfo:{},
    isShowBackTop:false,
    scrollTop:'',
    test:'test',
    recommend:[],
    isShowDetail:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid:options.iid
    })
    this._getDetailData()
    this._getRecommend()
  },
  //获取推荐数据
  _getRecommend(){
    // getRecommend().then(res => {
    //   // console.log(res)
    //   const recommend1 = res.data.data.list.splice(0,10)
     
    //   this.setData({
    //     // recommend:recommend
    //   })
    // })
    // .catch(err => {
    //   console.log(err)
    // })
    getReal().then(res => {
      // console.log('real', res)
      const recommend = res.data.splice(0,10)
      // console.log(recommend)
      this.setData({
        recommend:recommend
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  //获取详情数据
  _getDetailData(){
    getDetailData(this.data.iid)
      .then(res => {
        if(res.statusCode === 500){
          this.setData({
            isShowDetail:false
          })
        }
        if(res.statusCode === 200){
          const data = res.data.result
          // console.log(data)
          // 取出顶部图片
          const swiperImages = data.itemInfo.topImages
          //取出商品描述
          const titlesInfo = new TitlesInfo(data.itemInfo, data.columns, data.shopInfo.services)
          //加入地址
          titlesInfo.columns.push(titlesInfo.extra.sendAddress)
          //取出商户信息
          const shopInfo = new ShopInfo(data.shopInfo)
          // console.log(shopInfo)
          //取出商品细节展示
          const detailInfo = data.detailInfo
          // console.log(detailInfo)
          //商品参数
          const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)
          //获取评论信息
          let commentsInfo = {}
          if(data.rate && data.rate.list){
            commentsInfo = data.rate.list[0]
          }
          this.setData({
            swiperImages: swiperImages,
            titlesInfo:titlesInfo,
            shopInfo:shopInfo,
            detailInfo:detailInfo,
            paramInfo:paramInfo,
            commentsInfo: commentsInfo
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
    
  },
  scroll(e){
    let flag = e.detail.scrollTop > 444
    if(flag != this.data.isShowBackTop){
      this.setData({
        isShowBackTop:flag
      })
    }
  },
  backtop(){
    this.setData({
      scrollTop:0
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