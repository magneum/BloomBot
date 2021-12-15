//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
// _© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const apiKey = _𝔏𝔞𝔟_.WAPI;
const https = require(`https`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
// _© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
module.exports = {
  name: `weather`,
  description: `Get weather data of a city`,
  𝓜𝓮𝓮6ʍօʀɛ: `Obtain weather info by entering the city name.`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    `⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    const 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱 = require(`simple-git`)();
    await 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱.fetch();
    var 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓 = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var 𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰 = 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.substring(0, 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.length - 15);
    var 𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜 = await 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱.log([
      `KrakinzLab..origin/KrakinzLab`,
    ]);
    `⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    if (𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜.total != 0) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
          `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
          MessageType.text,
          { quoted: chat }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
    `⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
          MessageType.text,
          {
            quoted: chat,
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      return;
      `⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    } else {
      const weatherTypes = {
        sunny: `sunny`,
        clear: `clear`,
        cloud: `cloud`,
        overcast: `overcast`,
        rain: `rain`,
        drizzle: `drizzle`,
        snow: `snow`,
        storm: `storm`,
        fog: `fog`,
        haze: `haze`,
        mist: `mist`,
      };
      async function result(imageUrl, weatherDataVariables, downloading) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: imageUrl,
            },
            MessageType.image,
            {
              quoted: chat,
              mimetype: Mimetype.png,
              caption:
                `*Temperature:* {tempInC} °C | {tempInF} °F\n*Min Temp:* {minTempInC} °C | {minTempInF} °F\n*Max Temp:* {maxTempInC} °C | {maxTempInF} °F\n*Humidity:* {humidity}%\n*Wind:* {windSpeedInkmph} kmph | {windSpeedInmph} mph , {degree}°\n*Sunrise:* {sunriseTime}\n*Sunset:* {sunsetTime}\n\n\n*{weatherDescription}*\n{cityName} , {country}\n{dateAndTime}`.format(
                  weatherDataVariables
                ),
              thumbnail: null,
            }
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      if (arg.length === 0 || arg.length < 1) {
        var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const nahargs = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/nahargs`);
        return nahargs
          .nahargs(
            𝓚𝓻𝓪𝓴𝓲𝓷𝔃,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓,
            𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } else if (
        arg[arg.length - 1] === `tom` ||
        arg[arg.length - 1] === `tomorrow`
      ) {
        var downloading = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Processing data. Please wait...`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        arg[arg.length - 1] = ``;
        var cityName = arg.join(` `);
        const unit = `metric`;

        const url =
          `https://api.openweathermap.org/data/2.5/forecast?q=` +
          cityName +
          `&appid=` +
          apiKey +
          `&units=` +
          unit +
          `&cnt=` +
          8;

        https.get(url, function (response) {
          response.on(`error`, (cᴇʀʀᴏʀ) => {
            throw cᴇʀʀᴏʀ;
          });
          response.on(`data`, function (data) {
            try {
              const weatherData = JSON.parse(data);
              const tempInC = Number(weatherData.list[7].main.temp).toFixed(2);
              const tempInF = (tempInC * 1.8 + 32).toFixed(2);
              const minTempInC = Number(
                weatherData.list[7].main.temp_min
              ).toFixed(2);
              const minTempInF = (minTempInC * 1.8 + 32).toFixed(2);
              const maxTempInC = Number(
                weatherData.list[7].main.temp_max
              ).toFixed(2);
              const maxTempInF = (maxTempInC * 1.8 + 32).toFixed(2);

              const humidity = Number(
                weatherData.list[7].main.humidity
              ).toFixed(2);

              const windSpeedInkmph = (
                Number(weatherData.list[7].wind.speed) * 3.6
              ).toFixed(2);
              const windSpeedInmph = (windSpeedInkmph * 0.621371).toFixed(2);
              const windDegree = weatherData.list[7].wind.deg.toFixed(2);

              const sunriseTimeStamp = Number(weatherData.city.sunrise);
              var sunriseDate = new Date(sunriseTimeStamp);
              const sunriseTime =
                sunriseDate.getHours() +
                `:` +
                sunriseDate.getMinutes() +
                `:` +
                sunriseDate.getSeconds();
              const sunsetTimeStamp = Number(weatherData.city.sunset);
              var sunsetDate = new Date(sunsetTimeStamp);
              const sunsetTime =
                sunsetDate.getHours() +
                `:` +
                sunsetDate.getMinutes() +
                `:` +
                sunsetDate.getSeconds();

              var weatherDescription =
                weatherData.list[7].weather[0].description;

              for (var type in weatherTypes) {
                if (weatherDescription.includes(weatherTypes[type])) {
                  imageName = weatherTypes[type];
                  break;
                } else {
                  imageName = `fallback`;
                }
              }
              weatherDescription = weatherDescription.toUpperCase();
              cityName = weatherData.city.name;
              const country = weatherData.city.country;
              const timeOfRequest = weatherData.list[7].dt * 1000;
              var date = new Date(timeOfRequest);

              const dateAndTime =
                date.getDate() +
                `/` +
                (date.getMonth() + 1) +
                `/` +
                date.getFullYear() +
                ` ` +
                date.getHours() +
                `:` +
                date.getMinutes() +
                `:` +
                date.getSeconds();
              const weatherDataVariables = {
                tempInC: tempInC,
                tempInF: tempInF,
                minTempInC: minTempInC,
                minTempInF: minTempInF,
                maxTempInC: maxTempInC,
                maxTempInF,
                maxTempInF,
                humidity: humidity,
                windSpeedInkmph: windSpeedInkmph,
                windSpeedInmph: windSpeedInmph,
                degree: windDegree,
                sunriseTime: sunriseTime,
                sunsetTime: sunsetTime,
                weatherDescription: weatherDescription,
                cityName: cityName,
                country: country,
                dateAndTime: dateAndTime,
              };

              const imageUrl =
                `https://raw.githubusercontent.com/Prince-Mendiratta/𝓜𝖎𝖟𝖚ӄ𝖎-Resources/main/weather/` +
                imageName +
                `.jpg`;
              result(imageUrl, weatherDataVariables, downloading);
            } catch (cᴇʀʀᴏʀ) {
              𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
TRY LATER!

⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${𝓜𝖎𝖟𝖚ӄ𝖎.isPm}`,
                  MessageType.text,
                  { quoted: chat }
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
                });
              return;
            }
          });
        });
        return;
      } else {
        var downloading = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Processing data. Please wait...`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        var cityName = arg.join(` `);
        const unit = `metric`;

        const url =
          `https://api.openweathermap.org/data/2.5/weather?q=` +
          cityName +
          `&appid=` +
          apiKey +
          `&units=` +
          unit;

        https.get(url, function (response) {
          response.on(`error`, (cᴇʀʀᴏʀ) => {
            throw cᴇʀʀᴏʀ;
          });
          response.on(`data`, function (data) {
            const weatherData = JSON.parse(data);
            const tempInC = Number(weatherData.main.temp).toFixed(2);
            const tempInF = (tempInC * 1.8 + 32).toFixed(2);
            const minTempInC = Number(weatherData.main.temp_min).toFixed(2);
            const minTempInF = (minTempInC * 1.8 + 32).toFixed(2);
            const maxTempInC = Number(weatherData.main.temp_max).toFixed(2);
            const maxTempInF = (maxTempInC * 1.8 + 32).toFixed(2);
            const humidity = Number(weatherData.main.humidity).toFixed(2);
            const windSpeedInkmph = (
              Number(weatherData.wind.speed) * 3.6
            ).toFixed(2);
            const windSpeedInmph = (windSpeedInkmph * 0.621371).toFixed(2);
            const windDegree = weatherData.wind.deg.toFixed(2);
            const sunriseTimeStamp = Number(weatherData.sys.sunrise);
            var sunriseDate = new Date(sunriseTimeStamp);
            const sunriseTime =
              sunriseDate.getHours() +
              `:` +
              sunriseDate.getMinutes() +
              `:` +
              sunriseDate.getSeconds();
            const sunsetTimeStamp = Number(weatherData.sys.sunset);
            var sunsetDate = new Date(sunsetTimeStamp);
            const sunsetTime =
              sunsetDate.getHours() +
              `:` +
              sunsetDate.getMinutes() +
              `:` +
              sunsetDate.getSeconds();
            var weatherDescription = weatherData.weather[0].description;

            for (var type in weatherTypes) {
              if (weatherDescription.includes(weatherTypes[type])) {
                imageName = weatherTypes[type];
                break;
              } else {
                imageName = `fallback`;
              }
            }
            weatherDescription = weatherDescription.toUpperCase();
            cityName = weatherData.name;
            const country = weatherData.sys.country;
            const timeOfRequest = weatherData.dt * 1000;
            var date = new Date(timeOfRequest);

            const dateAndTime =
              date.getDate() +
              `/` +
              (date.getMonth() + 1) +
              `/` +
              date.getFullYear() +
              ` ` +
              date.getHours() +
              `:` +
              date.getMinutes() +
              `:` +
              date.getSeconds();
            const weatherDataVariables = {
              tempInC: tempInC,
              tempInF: tempInF,
              minTempInC: minTempInC,
              minTempInF: minTempInF,
              maxTempInC: maxTempInC,
              maxTempInF,
              maxTempInF,
              humidity: humidity,
              windSpeedInkmph: windSpeedInkmph,
              windSpeedInmph: windSpeedInmph,
              degree: windDegree,
              sunriseTime: sunriseTime,
              sunsetTime: sunsetTime,
              weatherDescription: weatherDescription,
              cityName: cityName,
              country: country,
              dateAndTime: dateAndTime,
            };
            const imageUrl =
              `https://raw.githubusercontent.com/Prince-Mendiratta/Botsapp-Resources/main/weather/` +
              imageName +
              `.jpg`;

            result(imageUrl, weatherDataVariables, downloading);
          });
        });
        return;
      }
    }
  },
};
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
// _© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
