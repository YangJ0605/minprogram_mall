// pages/detail/child/m-comments-info/m-comments-info.js
// import formTime from '/utils/util'
// let that;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentsInfo:{
      type:Object,
      value:{}
    }
  },
  data:{
    commentsInfoData: {},
    showComments: false
  },
  observers: {
    'commentsInfo': function(a, b){
      // this.properties.commentsInfo = a
      // console.log(this.properties.commentsInfo)
      if(Object.keys(a).length) {
        this.setData({
          commentsInfoData: a,
          showComments: true
        })
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    ready() {
      // wx.nextTick(() => [
      //   console.log(this.properties.commentsInfo)
      // ])
      // setTimeout(() => {
      //   console.log(this.properties.commentsInfo)
      // }, 5000);
      console.log(this.properties.commentsInfo)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    previewImage(e) {
      // console.log(this)
      // that = this;
      const {index} = e.currentTarget.dataset
      const imgArr = this.data.commentsInfoData.images
      const newImgArr = imgArr.map( img => {
        return `https:${img}`
      })
      wx.previewImage({
        urls: newImgArr,
        current: newImgArr[index]
      })
    }
  }
})
