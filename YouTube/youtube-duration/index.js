'use strict'
const format = require('./format')
function toSecond(dur) {
  var dur = format(dur)
  dur = dur.split(':')
  var newDur = []
  for (var i = 0; i < dur.length; i++) {
    if (i < dur.length-1) {
      newDur.push(dur[i]*60)
    }
    else{
      newDur.push(parseInt(dur[i]))
    }
  }
  var output = newDur.reduce((x,y)=>x+y)
  return output
}

module.exports = {format,toSecond};
