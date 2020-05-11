// pages/detail/child/m-titles-info/m-titiles-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:{
      type:Object,
      value:{}
    }
  },
  // onShow(){
  //   console.log(this.properties.content)
  // },
  /**
   * 组件的初始数据
   */
  data: {
    
  },
  lifetimes:{
    // attached(){
    //   console.log(this.data.kuaidi)
    //   const index = parseInt(Math.random() + 4)
    //   console.log(this.data.kauidiType)
    //   this.setData({
    //     kauidiType: this.data.kuaidi[index]
    //   })
    // }
  },
  pageLifetimes:{
    // show(){
    //   // console.log('sjow')
    //   // console.log(this.properties.content)
      
    // }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    test(){
      console.log(this.properties.content)
    }
  }
})
