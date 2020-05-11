import request from './network.js'
const baseURL = "http://106.54.54.237:8000/api/wh" 
// const baseURL = "http://123.207.32.32:8000/api/wh" 

function getHomeData(){
  return request({
    url:baseURL + '/home/multidata'
  })
}

function getGoodsData(type,page){
  return request({
    url:baseURL + `/home/data?type=${type}&page=${page}`
  })
}

export {
  getHomeData,
  getGoodsData
}