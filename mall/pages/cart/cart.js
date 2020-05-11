// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    isSelectedAll:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    this.setData({
      cartList:app.globalData.cartList
    })
  },
  itemCheckClick(e){
    // const product = this.data.cartList.find(item => e.currentTarget.dataset.iid === item.iid)
    // this.data.cartList[index].isSelected = !this.data.cartList[index].isSelected
    const index = e.currentTarget.dataset.index
    const list = this.data.cartList
    list[index].isSelected = !list[index].isSelected
    this.setData({
      cartList: list
    })
  },
  toggleCheckAll(e) {
    const list = this.data.cartList
    const flag = e.currentTarget.dataset.flag
    if(flag){
      list.forEach(item => item.isSelected = false)
      this.setData({
        cartList: list
      })
    }else {
      list.forEach(item => item.isSelected = true)
      this.setData({
        cartList: list
      })
    }
  },
  reduce(e) {
    // console.log('reduce')
    const {index} = e.currentTarget.dataset
    app.reduceCount(index, () => {
      this.setData({
        cartList:app.globalData.cartList
      })
    })
  },
  add(e) {
    const {index} = e.currentTarget.dataset
    app.addCount(index)
    this.setData({
      cartList:app.globalData.cartList
    })
  },
  showToast() {
    wx.showToast({
      title: '暂不支持支付功能',
      icon: 'none'
    })
  }
})