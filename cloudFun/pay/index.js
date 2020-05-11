// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')
const md5 = require('md5')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const appid = wxContext.APPID
  console.log(appid)
  const nonceStr = '5K8264ILTKCH16CQ2502SI8ZNMTM67VS'
  const tpackage = 'prepay_id=wx2017033010242291fcfe0db70013231072'
  const timeStamp = String(Date.now())
  const signType = md5('qwertyuuiuioopdasdadasfafasfas')
  const key = 'qazwsxedcrfvtgbyhnujmikolp111111'
  const paySign = md5(`appId=${appid}&nonceStr=${nonceStr}&package=${tpackage}&signType=${signType}&timeStamp=${timeStamp}$key=${key}`)
  return {
    timeStamp,
    nonceStr,
    tpackage,
    signType,
    paySign
  }
}