function request (options){
  wx.showLoading({
    title: '数据加载中ing',
  })
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method:options.method || 'get',
      data:options.data || {},
      header:options.header,
      success:(res) => {
        resolve(res)
        wx.hideLoading()
      },
      fail:reject,
      // complete: res => {
      //   wx.hideLoading()
      // }
    })
  })
}

export default request