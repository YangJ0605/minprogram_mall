// components/m-goods-item/m-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    iid:''
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goToDetail(){
      wx.navigateTo({
        url:`/pages/detail/detail?iid=${this.properties.item.iid}`,
      })
    }
  }
})
