try {
  const moment = require(`moment-timezone`);
  const time2 = moment().tz(`Asia/Kolkata`).format(`HH:mm:ss`);
  if (time2 < `24:59:00`) {
    var greetingTime = `Good night😴`;
  }
  if (time2 < `19:00:00`) {
    var greetingTime = `Good evening🌞`;
  }
  if (time2 < `18:00:00`) {
    var greetingTime = `good afternoon🌄`;
  }
  if (time2 < `15:00:00`) {
    var greetingTime = `good afternoon☀️`;
  }
  if (time2 < `11:00:00`) {
    var greetingTime = `Good morning🌅`;
  }
  if (time2 < `05:00:00`) {
    var greetingTime = `Good night💤`;
  }
  console.log(greetingTime);
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
