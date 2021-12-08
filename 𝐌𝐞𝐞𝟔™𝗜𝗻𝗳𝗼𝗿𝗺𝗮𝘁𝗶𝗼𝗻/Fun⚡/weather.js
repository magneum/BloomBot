const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const apiKey = ꜱɪɢɴ.WAPI;
const https = require(`https`);
module.exports = {
  name: `weather`,
  commandType: "Fun⚡",
  description: `Get weather data of a city`,
  ᴍᴇᴇ6ʍօʀɛ: `Obtain weather info by entering the city name.`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, ʍɛɛɨռք, ɴᴇᴡᴍᴇᴇ6) {
    if (ɴᴇᴡᴍᴇᴇ6.total) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⬡••••••••⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡••••••••⬡
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 ${ᴋᴇɪ}update
𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
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
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
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
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      }
      if (ʍɛɛɨռք.length === 0 || ʍɛɛɨռք.length < 1) {
        return await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.ARC,
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
            ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          });
      } else if (
        ʍɛɛɨռք[ʍɛɛɨռք.length - 1] === `tom` ||
        ʍɛɛɨռք[ʍɛɛɨռք.length - 1] === `tomorrow`
      ) {
        var downloading = await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Processing data. Please wait...`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        ʍɛɛɨռք[ʍɛɛɨռք.length - 1] = ``;
        var cityName = ʍɛɛɨռք.join(` `);
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
                `https://raw.githubusercontent.com/Prince-Mendiratta/ᴍᴇᴇ6-Resources/main/weather/` +
                imageName +
                `.jpg`;
              result(imageUrl, weatherDataVariables, downloading);
            } catch (cᴇʀʀᴏʀ) {
              ʍɛɛℓιєηт
                .sendMessage(
                  ᴍᴇᴇ6.chatId,
                  `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
TRY LATER!

⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴍᴇᴇ6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴍᴇᴇ6.isPm}`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
                });
              return;
            }
          });
        });
        return;
      } else {
        var downloading = await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Processing data. Please wait...`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        var cityName = ʍɛɛɨռք.join(` `);
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
                `https://raw.githubusercontent.com/Prince-Mendiratta/ᴍᴇᴇ6-Resources/main/weather/` +
                imageName +
                `.jpg`;

              result(imageUrl, weatherDataVariables, downloading);
            } catch (cᴇʀʀᴏʀ) {
              ʍɛɛℓιєηт
                .sendMessage(
                  ᴍᴇᴇ6.chatId,
                  `*🎮ᴍᴇᴇ6™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ᴋᴇɪ}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
                });
              return;
            }
          });
        });
        return;
      }
    } catch (cᴇʀʀᴏʀ) {
      ʍɛɛℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
TRY AGAIN LATER!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴍᴇᴇ6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴍᴇᴇ6.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
