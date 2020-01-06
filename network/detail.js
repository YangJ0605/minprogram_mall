import request from './network.js'
const baseURL = 'http://123.207.32.32:8000/api/w1'

export function getDetailData(iid){
  return request({
    url: baseURL + '/detail',
    data:{
      iid
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


 
