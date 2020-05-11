// pages/index.js
import {
  getHomeData,
  getGoodsData
} from '../../network/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles:['流行', '新款', '精选'],
    goods:{
      pop:{page:1,list:[]},
      new:{page:1,list:[]},
      sell:{page:1,list:[]}
    },
    currentType:'pop',
    currentTypeList:['pop','new','sell'],
    isShowBackTop:false,
    isFixed: false,
    tabScrollTop:0,
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getHomeData()
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  onShow(){
    // wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
    //   setTimeout(() => {
    //     console.log(rect)
    //   }, 1000);
    //   console.log(rect)
    //   this.data.tabScrollTop = rect.top
    // }).exec()
  },
  //监听网络图片加载完成
  IndeximageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
      // console.log(rect.top)
    }).exec()
  },
  //获取goods数据
  _getGoodsData(type){
    // console.log(this.data.goods[type].page)
    const page = this.data.goods[type].page
    // getGoodsData(type,page).then(res => {
    //   // console.log(res)
    //   const list = res.data.data.list
    //   const oldList = this.data.goods[type].list
    //   oldList.push(...list)
    //   const listKey = `goods.${type}.list`
    //   const pageKey = `goods.${type}.page`
    //   // const goods = this.data.goods
    //   // goods[type].list.push(...list)
    //   // goods[type].page += 1
    //   this.setData({
    //     [listKey]:oldList,
    //     [pageKey]:this.data.goods[type].page + 1
    //     // goods:goods
    //   })
    //   // console.log(this.data.goods[type].page)
    // })
    wx.cloud.callFunction({
      name: 'getGoodsData',
      data: {
        type,
        page
      }
    }).then(res => {
      const {data} = JSON.parse(res.result)
      // console.log(JSON.parse(res.result))
      // console.log(data)
      const list = data.list
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      const listKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [listKey]:oldList,
        [pageKey]:this.data.goods[type].page + 1
        // goods:goods
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  // 获取轮播图与推荐
  _getHomeData(){
    // getHomeData().then(res => {
    //   console.log(res)
    //   if(res.statusCode === 200){
    //     const banners = res.data.data.banner.list
    //     const recommends = res.data.data.recommend.list
    //     this.setData({
    //       banners:banners,
    //       recommends:recommends
    //     })
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })   
    wx.showLoading({
      title: '正在加载ing',
    })    
    wx.cloud.callFunction({
      name: 'getHomeData'
    }).then(res => {
      wx.hideLoading()
      console.log(JSON.parse(res.result))
      const {data}= JSON.parse(res.result)
      const banners = data.banner.list
      const recommends = data.recommend.list
      this.setData({
        banners:banners,
        recommends:recommends,
        loading: false
      })
    }).catch(err => {
      console.log(err)
    })  
  },
  tabClick(e){
    const index = e.detail.index
    this.setData({
      currentType:this.data.currentTypeList[index]
    })
  },
  //页面滚动到底部触发的事件
  onReachBottom(){
    this._getGoodsData(this.data.currentType)
  },
  //监听页面滚动
  onPageScroll(e){
    const backTop = 444
    const flag = e.scrollTop > backTop
    if(flag !== this.data.isShowBackTop){
      this.setData({
        isShowBackTop:flag
      })
    }
    //是否让tab fixed
    const flag2 = e.scrollTop > this.data.tabScrollTop
    if(flag2 !== this.data.isFixed){
      this.setData({
        isFixed:flag2
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})