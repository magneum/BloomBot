const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require("../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const apiKey = _𝔏𝔞𝔟_.WAPI;
const https = require(`https`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
// 🛸𝓜𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
module.exports = {
  name: `weather`,
  description: `Get weather data of a city`,
  𝓜𝓮𝓮6ʍօʀɛ: `Obtain weather info by entering the city name.`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    await 𝓜𝓮𝓮git.fetch();
    var Sender = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ɴᴇᴡ𝓜𝓮𝓮6 = await 𝓜𝓮𝓮git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ𝓜𝓮𝓮6.total != 0) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
          `⬡ *爪𝖎𝖟𝖚ӄ𝖎* by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟 ⬡

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === "120363025343298860@g.us" && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `⬡ *爪𝖎𝖟𝖚ӄ𝖎* by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟 ⬡

*•@${personsending}*,
シ︎𝐆𝐫𝐨𝐮𝐩👓https://chat.whatsapp.com/Ih78PSfbxhn6hIS2D09S5S`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    } else {
      try {
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
          return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: _𝔏𝔞𝔟_.ARC,
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                caption: `*⚠️Seems like someone forgot to give text or language!*

*Usage Example*
*${ᴋᴇɪ}weather <city>`,
              }
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
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
                const tempInC = Number(weatherData.list[7].main.temp).toFixed(
                  2
                );
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
                    MessageType.text
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
              MessageType.text
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
              try {
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
                  `https://raw.githubusercontent.com/Prince-Mendiratta/𝓜𝖎𝖟𝖚ӄ𝖎-Resources/main/weather/` +
                  imageName +
                  `.jpg`;

                result(imageUrl, weatherDataVariables, downloading);
              } catch (cᴇʀʀᴏʀ) {
                𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    `*🎮𝓜𝖎𝖟𝖚ӄ𝖎™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ᴋᴇɪ}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
                    MessageType.text
                  )
                  .catch((cᴇʀʀᴏʀ) => {
                    ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
                  });
                return;
              }
            });
          });
          return;
        }
      } catch (cᴇʀʀᴏʀ) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
TRY AGAIN LATER!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${𝓜𝖎𝖟𝖚ӄ𝖎.isPm}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮𝓜𝖎𝖟𝖚ӄ𝖎™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
