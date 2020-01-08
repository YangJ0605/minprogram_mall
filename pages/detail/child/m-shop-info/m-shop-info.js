// pages/detail/child/m-shop-info/m-shop-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopInfo:{
      type:Object,
      value:{}
    },
    test:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    ready(){
      // console.log(this)
      // console.log(this.properties)
      // console.log(this.properties.test)
      // console.log(this.properties.shopInfo)
    }
  },
  // pageLifetimes:{
  //   show(){
  //     console.log(this.properties.shopInfo)
  //   }
  // },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
