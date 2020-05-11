// pages/category/category.js
// import {
//   getCategory,
//   getSubcategory,
//   getCategoryDetail
// } from '../../network/category.js'

Page({
  data: { 
    categories: [],
    categoryData: {
    },
    currentIndex: 0
  },
  onLoad: function (options) {
    this._getData()
  },
  _getData() {
    // 1.请求分类数据
    this._getCategory()
  },
  _getCategory() {
    // getCategory().then(res => {
    //   console.log(res.data.data)
    //   // 1.获取categories
    //   const categories = res.data.data.category.list;

    //   // 2.初始化每个类别的子数据
    //   const categoryData = {}
    //   for (let i = 0; i < categories.length; i++) {
    //     categoryData[i] = {
    //       subcategories: [],
    //       categoryDetail: []
    //       // categoryDetail: {
    //       //   'pop': [],
    //       //   'new': [],
    //       //   'sell': []
    //       // }
    //     }
    //   }

    //   // 3.修改data中的数据
    //   this.setData({
    //     categories: res.data.data.category.list,
    //     categoryData: categoryData
    //   })

    //   // 4.请求第一个类别的数据
    //   this._getSubcategory(0)

    //   // 5.请求第一个类别的详情数据
    //   this._getCategoryDetail(0)
    // })
    wx.showLoading({
      title: '正在加载ing',
    })  
    wx.cloud.callFunction({
      name: 'getCategory'
    }).then(res => {
      // console.log(res.result)
      wx.hideLoading()
      const data = typeof res.result === 'object' ? res.result.data : JSON.parse(res.result).data
       // 1.获取categories
      //  console.log(data)
       const categories = data.category.list;

       // 2.初始化每个类别的子数据
       const categoryData = {}
       for (let i = 0; i < categories.length; i++) {
         categoryData[i] = {
           subcategories: [],
           categoryDetail: []
           // categoryDetail: {
           //   'pop': [],
           //   'new': [],
           //   'sell': []
           // }
         }
       }
 
       // 3.修改data中的数据
       this.setData({
         categories: data.category.list,
         categoryData: categoryData
       })
 
       // 4.请求第一个类别的数据
       this._getSubcategory(0)
 
       // 5.请求第一个类别的详情数据
       this._getCategoryDetail(0)
    })
    .catch(err => {
      console.log(err)
    })
  },
  _getSubcategory(currentIndex) {
    // // 1.获取对应的maitkey
    const maitkey = this.data.categories[currentIndex].maitKey;

    // // 2.请求的数据
    // getSubcategory(maitkey).then(res => {
    //   console.log(res.data.data)
    //   const tempCategoryData = this.data.categoryData;
    //   tempCategoryData[currentIndex].subcategories = res.data.data.list;
    //   this.setData({
    //     categoryData: tempCategoryData
    //   })
    // })
    wx.showLoading({
      title: '正在加载ing',
    })  
    wx.cloud.callFunction({
      name:'getSubcategory',
      data:{
        maitkey
      }
    }).then(res => {
      // console.log(res.result.data)
      wx.hideLoading()
      const data = typeof res.result === 'object' ? res.result.data : JSON.parse(res.result).data
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].subcategories = data.list;
      this.setData({
        categoryData: tempCategoryData
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  _getCategoryDetail(currentIndex) {
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;

    // 2.请求数据类别的数据
    this._getRealCategoryDetail(currentIndex, miniWallKey, 'pop');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'new');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
  },
  _getRealCategoryDetail(index, miniWallKey, type) {
    // getCategoryDetail(miniWallKey, type).then(res => {
    //   console.log(res.data)
    //   // 1.获取categoryData
    //   const categoryData = this.data.categoryData;

    //   // 2.修改数据
    //   categoryData[index].categoryDetail = res;

    //   // 3.修改data中的数据
    //   this.setData({
    //     categoryData: categoryData
    //   })
    // })
    wx.showLoading({
      title: '正在加载ing',
    })
    wx.cloud.callFunction({
      name: 'getCategoryDetail',
      data: {
        type,
        miniWallKey
      }
    }).then(res => {
      // console.log(res.result)
      // 1.获取categoryData
      const categoryData = this.data.categoryData;
      wx.hideLoading()
      // 2.修改数据
      categoryData[index].categoryDetail = typeof res.result === 'object' ?res.result : JSON.parse(res.result);

      // 3.修改data中的数据
      this.setData({
        categoryData: categoryData
      })
    }).catch(err => {
      console.log(err)
    })
  },
  menuClick(e) {
    // 1.改变当前的currentIndex
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })

    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex);

    // 3.请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex)
  }
})