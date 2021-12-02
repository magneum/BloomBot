// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
const apiKey = UltronSitreper.WAPI;
const https = require(`https`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `weather`,
  description: `Get weather data of a city`,
  ƈʏɮօʀɢʍօʀɛ: `
Obtain weather info by entering the city name.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
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
        await ӄʀǟӄɨռʐ
          .sendMessage(Últrðñ.chatId, {
            url: imageUrl
          }, MessageType.image, {
            mimetype: Mimetype.png,
            caption: `*Temperature:* {tempInC} °C | {tempInF} °F\n*Min Temp:* {minTempInC} °C | {minTempInF} °F\n*Max Temp:* {maxTempInC} °C | {maxTempInF} °F\n*Humidity:* {humidity}%\n*Wind:* {windSpeedInkmph} kmph | {windSpeedInmph} mph , {degree}°\n*Sunrise:* {sunriseTime}\n*Sunset:* {sunsetTime}\n\n\n*{weatherDescription}*\n{cityName} , {country}\n{dateAndTime}`.format(
              weatherDataVariables
            ),
            thumbnail: null,
          })
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
      }
      if (arguments.length === 0 || arguments.length < 1) {
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          "❌",
          MessageType.text
        );
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId, {
            url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`
          },
          MessageType.image, {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
          }
        );
        return;
      } else if (
        arguments[arguments.length - 1] === `tom` ||
        arguments[arguments.length - 1] === `tomorrow`
      ) {
        var downloading = await ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `Processing data. Please wait...`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        arguments[arguments.length - 1] = ``;
        var cityName = arguments.join(` `);
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
                `https://raw.githubusercontent.com/Prince-Mendiratta/Últrðñ-Resources/main/weather/` +
                imageName +
                `.jpg`;
              result(imageUrl, weatherDataVariables, downloading);
            } catch (cᴇʀʀᴏʀ) {
              ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId,
                `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
TRY LATER!

⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
                MessageType.text
              );
              return;
            }
          });
        });
        return;
      } else {
        var downloading = await ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `Processing data. Please wait...`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        var cityName = arguments.join(` `);
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
                `https://raw.githubusercontent.com/Prince-Mendiratta/Últrðñ-Resources/main/weather/` +
                imageName +
                `.jpg`;

              result(imageUrl, weatherDataVariables, downloading);
            } catch (cᴇʀʀᴏʀ) {
              ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId,
                `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
                MessageType.text
              );
              return;
            }
          });
        });
        return;
      }
    } catch (cᴇʀʀᴏʀ) {
      ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
TRY AGAIN LATER!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================