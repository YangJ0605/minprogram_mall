// pages/index/child/m-recommend/m-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isImageload:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTolink(e){
      const index = e.currentTarget.dataset.index
      console.log(this.properties.recommends[index].link)
      wx.navigateTo({
        url: `/out/out?url=${this.properties.recommends[index].link}`,
        success(res){
          console.log(res)
        },
        fail(err){
          console.log(err)
        }
      })
    },
    handleImageLoad(e){
      // console.log(e)
      if(!this.data.isImageload){
        this.triggerEvent('IndeximageLoad',{name:'xx'})
        this.data.isImageload = true
      }
    }
  }
})
