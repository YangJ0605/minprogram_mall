// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'dev-demo-test'
})
const db = cloud.database().collection('user')
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const data = event.data
  // console.log(data)
  const newData = JSON.parse(data)
  // console.log(newData)
  db.add({
    data: newData
  }).then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}