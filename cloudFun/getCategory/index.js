// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const rp = require('request-promise')
const uri = 'http://106.54.54.237:8000/api/wh/category'

// 云函数入口函数
exports.main = async (event, context) => {
  return await rp(uri)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}