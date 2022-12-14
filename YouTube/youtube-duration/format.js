'use strict';

function parseDuration(PT, format) {
  var output = [];
  var durationInSec = 0;
  var matches = PT.match(/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)W)?(?:(\d*)D)?T?(?:(\d*)H)?(?:(\d*)M)?(?:(\d*)S)?/i);
  var parts = [
    {
      pos: 1,
      multiplier: 86400 * 365
    },
    {
      pos: 2,
      multiplier: 86400 * 30
    },
    {
      pos: 3,
      multiplier: 604800
    },
    {
      pos: 4,
      multiplier: 86400
    },
    {
      pos: 5,
      multiplier: 3600
    },
    {
      pos: 6,
      multiplier: 60
    },
    {
      pos: 7,
      multiplier: 1
    }
  ];

  for (var i = 0; i < parts.length; i++) {
    if (typeof matches[parts[i].pos] != 'undefined') {
      durationInSec += parseInt(matches[parts[i].pos]) * parts[i].multiplier;
    }
  }
  var totalSec = durationInSec;
  if (durationInSec > 3599) {
    output.push(parseInt(durationInSec / 3600));
    durationInSec %= 3600;
  }
  output.push(('0' + parseInt(durationInSec / 60)).slice(-2));
  output.push(('0' + durationInSec % 60).slice(-2));
  if (format === undefined)
    return output.join(':');
  else if (format === 'sec')
    return totalSec;
};

module.exports = parseDuration;
