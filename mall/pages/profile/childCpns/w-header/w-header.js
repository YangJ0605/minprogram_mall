// pages/profile/childCpns/w-header/w-header.js
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
    defaultSrc: '/assets/profile/avatar.png',
    hasLogin: false,
    avatarSrc: '',
    nickname: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo(e) {
      console.log(e)
      if(e.detail.errMsg === 'getUserInfo:ok') {
        // console.log('ok')
        // this.data.hasLogin = true
        // this.data.avatarSrc = e.detail.userInfo.avatarUrl
        this.setData({
          hasLogin: true,
          avatarSrc: e.detail.userInfo.avatarUrl,
          nickname: e.detail.userInfo.nickName
        })
      }
    }
  }
})
