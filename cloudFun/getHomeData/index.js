// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')
cloud.init()
const uri = 'http://106.54.54.237:8000/api/wh/home/multidata'
// 云函数入口函数
exports.main = async (event, context) => {
  return await rp(uri)
    .then(res => {
      // console.log(res)
      return res
    })
    .catch(err => {
      return err
    })
}