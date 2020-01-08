// pages/detail/child/m-bottom-tabbar/m-bottom-tabbar.js
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
    images:{
      kefu:{path:"/assets/bottom_bar/kefu.png",selectedPath:"/assets/bottom_bar/kefu_active.png",clicked:false,text:'客服'},
      dianpu:{path:'/assets/bottom_bar/dianpu.png',selectedPath:'/assets/bottom_bar/dianpu_active.png',clicked:false,text:'店铺'},
      shoucang:{path:'/assets/bottom_bar/shoucang.png',selectedPath:'/assets/bottom_bar/shoucang_active.png',clicked:false,text:'收藏'}
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    togglePath(e){
      // console.log(e)
      const type = e.currentTarget.dataset.key
      const key = `images.${type}.clicked`
      this.setData({
        [key]: !this.data.images[type].clicked
      })
    }
  }
})
