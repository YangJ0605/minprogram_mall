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
  onLoad: function (options) {
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      cartList:app.globalData.cartList
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})