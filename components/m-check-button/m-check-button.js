// components/m-checkd-button/m-check-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
   isSelected:false,
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
    }
  }
})
