// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const rp = require('request-promise')
const uri = 'http://106.54.54.237:8000/api/wh/subcategory/detail'

// 云函数入口函数
exports.main = async (event, context) => {
  const {type, miniWallKey} = event
  return await rp(uri + `?type=${type}&miniWallkey=${miniWallKey}`)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}