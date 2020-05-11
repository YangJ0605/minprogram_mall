// pages/test/test.js
const appID ='wx7b6a83462b32eabf'
const appSecret = 'ab1a294888d41ff6c8a6b7c66ae6f580'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: ''
  },
  onLogin(e) {
    const data = e.detail.rawData
    wx.request({
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appID}&secret=${appSecret}&js_code=${this.data.code}&grant_type=authorization_code`,
      method: 'GET',
      success: res => {
        console.log(res)
      },
      fail: err => console.log(err)
    })
  },
  handleContact(e){
    console.log(e)
  },
  pay() {
    wx.cloud.callFunction({
      name: 'pay'
    }).then(res => {
      // console.log(res)
      // console.log(res.result)
      const data = res.result
      const { timeStamp , nonceStr, tpackage, signType, paySign} = data
      // const {} = 
      console.log(timeStamp)
      console.log(tpackage)
      wx.requestPayment({
        nonceStr,
        timeStamp,
        package: tpackage,
        signType,
        paySign,
        success: res => {
          console.log(res)
        },
        fail: err => {
          console.log(err)
        }
      })
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getHomeData()
    // this.getGoodsData()
    // this.getDetailData()
    // this.getCategory()
    // this.getSubcategory()
    // this.getCategoryDetail()
    wx.login({
      success: res => {
        this.data.code = res.code
      }
    })
  },
  getHomeData() {
    wx.cloud.callFunction({
      name: 'getSwiper'
    }).then(res => {
      console.log(JSON.parse(res.result))
    }).catch(err => {
      console.log(err)
    })
  },
  getGoodsData() {
    wx.cloud.callFunction({
        name: 'getGoodsData',
        data: {
          type: 'pop',
          page: 1
        }
      }).then(res => {
        console.log(JSON.parse(res.result))
      })
      .catch(err => {
        console.log(err)
      })
  },
  getDetailData() {
    wx.cloud.callFunction({
        name: 'getDetailData',
        data: {
          iid: '1lrzvr8'
        }
      }).then(res => {
        if (res.result.statusCode === 500) {
          console.log('xxxx')
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  getCategory() {
    wx.cloud.callFunction({
        name: 'getCategory'
      }).then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getSubcategory() {
    wx.cloud.callFunction({
        name: 'getSubcategory',
        data: {
          maitkey: 582
        }
      }).then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getCategoryDetail() {
    wx.cloud.callFunction({
      name: 'getCategoryDetail',
      data: {
        type: 'pop',
        miniWallkey: 50003
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
})