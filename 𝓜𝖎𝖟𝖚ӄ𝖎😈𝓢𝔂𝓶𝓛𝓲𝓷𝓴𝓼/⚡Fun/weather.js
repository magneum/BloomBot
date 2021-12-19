// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const apiKey = _𝔏𝔞𝔟_.WAPI;
const https = require(`https`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `weather`,
  description: `Get weather data of a city`,
  𝓜𝓮𝓮6ʍօʀɛ: `Obtain weather info by entering the city name.`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
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
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: imageUrl,
            },
            MessageType.image,
            {
              quoted: chat,
              mimetype: Mimetype.png || Mimetype.jpeg,
              caption:
                `*Temperature:* {tempInC} °C | {tempInF} °F\n*Min Temp:* {minTempInC} °C | {minTempInF} °F\n*Max Temp:* {maxTempInC} °C | {maxTempInF} °F\n*Humidity:* {humidity}%\n*Wind:* {windSpeedInkmph} kmph | {windSpeedInmph} mph , {degree}°\n*Sunrise:* {sunriseTime}\n*Sunset:* {sunsetTime}\n\n\n*{weatherDescription}*\n{cityName} , {country}\n{dateAndTime}`.format(
                  weatherDataVariables
                ),
              thumbnail: null,
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      if (arg.length === 0 || arg.length < 1) {
        var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const nahargs = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/nahargs`);
        return nahargs
          .nahargs(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀᴄᴏɴꜰ,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } else if (
        arg[arg.length - 1] === `tom` ||
        arg[arg.length - 1] === `tomorrow`
      ) {
        var downloading = await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Processing data. Please wait...`,
            MessageType.text
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
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
          response.on(`ℓαвєяяσя`, (ℓαвєяяσя) => {
            throw ℓαвєяяσя;
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
            } catch (ℓαвєяяσя) {
              ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
TRY LATER!

⚠️𝗘𝗿𝗿𝗼𝗿
• ${ℓαвєяяσя}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${𝓜𝖎𝖟𝖚ӄ𝖎.isPm}`,
                  MessageType.text,
                  { quoted: chat }
                )
                .catch((ℓαвєяяσя) => {
                  ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
                });
              return;
            }
          });
        });
        return;
      } else {
        var downloading = await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Processing data. Please wait...`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
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
          response.on(`ℓαвєяяσя`, (ℓαвєяяσя) => {
            throw ℓαвєяяσя;
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
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
