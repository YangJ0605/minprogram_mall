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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTolink(e){
      const index = e.currentTarget.dataset.index
      wx.navigateTo({
        url: `/out/out?url=${this.properties.recommends[index].link}`,
        success(res){
          console.log(res)
        },
        fail(err){
          console.log(err)
        }
      })
    }
  }
})
