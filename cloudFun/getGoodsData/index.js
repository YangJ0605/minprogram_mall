// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')
cloud.init()
const uri = 'http://106.54.54.237:8000/api/wh/home/data'

// 云函数入口函数
exports.main = async (event, context) => {
  const {type, page} = event
  // console.log(type, page)
  // return {
  //     type,
  //     page
  // }
  return await rp(uri + `?type=${type}&page=${page}`)
    .then(res => {
      // console.log(res)
      return res
    })
    .catch(err => {
      return err
    })
}