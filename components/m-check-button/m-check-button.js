// components/m-checkd-button/m-check-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSelected:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   selectedPath:'/assets/cart/select_active.png',
   path:'/assets/cart/select.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleSelected(){
      this.setData({
        isSelected: !this.data.isSelected
      })
      this.triggerEvent('parentSelected',{sonSlected:this.properties.isSelected},{})
    }
  }
})
