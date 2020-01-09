const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function throttle(fn,wait) {
  var context,agrs
  var previous = 0
  return  function() {
    var now = +new Date()
    context =this
    agrs = arguments
    if(now - previous > wait) {
      fn.apply(context, agrs)
      previous = now
    }
  }
}

module.exports = {
  formatTime: formatTime,
  throttle:throttle
}
