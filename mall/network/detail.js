import request from './network.js'
const baseURL = "http://106.54.54.237:8000/api/wh" 
// const baseURL = "http://123.207.32.32:8000/api/wh" 
//两种数据结合
const maitKeyArr = [10062603, 50003, 50004, 51716]
const typeArr = ['sell', 'new', 'pop']
let mindex = Math.floor(Math.random() * 4)
let tindex = Math.floor(Math.random() * 3)
const type = typeArr[tindex]
const miniWallkey = maitKeyArr[mindex]

export function getDetailData(iid){
  return request({
    url: baseURL + '/detail',
    data:{
      iid
    }
  })
}

export function getRecommend(){
  // return request({
  //   url: baseURL + '/subcategory',
  //   data:{
  //     maitKey
  //   }
  // })
  return request({
    url: baseURL + '/recommend'
  })
}
export function getReal(){
  return request({
    url: baseURL + '/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}

export class TitlesInfo {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.extra = itemInfo.extra
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}


export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class ParamInfo {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule&&rule.tables ? rule.tables : []
  }
}
