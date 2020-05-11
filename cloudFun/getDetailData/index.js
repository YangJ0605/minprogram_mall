// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const rp = require('request-promise')
const uri = 'http://106.54.54.237:8000/api/wh/detail'

// 云函数入口函数
exports.main = async (event, context) => {
  const {iid} = event
  // const iid = '12233213'
  // console.log(type, page)
  // return {
  //     type,
  //     page
  // }
  return await rp(uri + `?iid=${iid}`)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}