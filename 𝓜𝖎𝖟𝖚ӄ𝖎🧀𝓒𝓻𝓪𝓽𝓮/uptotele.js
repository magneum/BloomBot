"⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡";
//•⬡• ɢɴᴜ ɢᴇɴᴇʀᴀʟ ᴘᴜʙʟɪᴄ ʟɪᴄᴇɴꜱᴇ ᴠᴇʀꜱɪᴏɴ 3, 29 ᴊᴜɴᴇ 2007 ᴄᴏᴘʏʀɪɢʜᴛ (ᴄ) 2007 ꜰʀᴇᴇ ꜱᴏꜰᴛᴡᴀʀᴇ ꜰᴏᴜɴᴅᴀᴛɪᴏɴ
//•⬡• ᴇᴠᴇʀʏᴏɴᴇ ɪꜱ ᴘᴇʀᴍɪᴛᴛᴇᴅ ᴛᴏ 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 ᴠᴇʀʙᴀᴛɪᴍ ᴄᴏᴘɪᴇꜱ ᴏꜰ ᴛʜɪꜱ ʟɪᴄᴇɴꜱᴇ ᴅᴏᴄᴜᴍᴇɴᴛ, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//•⬡• —••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under Apache License
"⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡";
const FormData = require("form-data");
const fetch = require("node-fetch");
const { fromBuffer } = require("file-type");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
("⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡");
//•⬡• ɢɴᴜ ɢᴇɴᴇʀᴀʟ ᴘᴜʙʟɪᴄ ʟɪᴄᴇɴꜱᴇ ᴠᴇʀꜱɪᴏɴ 3, 29 ᴊᴜɴᴇ 2007 ᴄᴏᴘʏʀɪɢʜᴛ (ᴄ) 2007 ꜰʀᴇᴇ ꜱᴏꜰᴛᴡᴀʀᴇ ꜰᴏᴜɴᴅᴀᴛɪᴏɴ
//•⬡• ᴇᴠᴇʀʏᴏɴᴇ ɪꜱ ᴘᴇʀᴍɪᴛᴛᴇᴅ ᴛᴏ 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 ᴠᴇʀʙᴀᴛɪᴍ ᴄᴏᴘɪᴇꜱ ᴏꜰ ᴛʜɪꜱ ʟɪᴄᴇɴꜱᴇ ᴅᴏᴄᴜᴍᴇɴᴛ, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//•⬡• —••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under Apache License
("⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡");
const uptotele = async (media) =>
  new Promise(async (resolve, reject) => {
    try {
      let { ext } = await fromBuffer(media);
      console.log("Uploading image to server telegra.ph");
      let form = new FormData();
      form.append("file", media, "tmp" + ext);
      await fetch("https://telegra.ph/upload", {
        method: "POST",
        body: form,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) return reject(res.error);
          resolve("https://telegra.ph" + res[0].src);
          console.log("ok success");
        })
        .catch((err) => reject(err));
    } catch (e) {
      return console.log(e);
    }
  });
("⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡");
//•⬡• ɢɴᴜ ɢᴇɴᴇʀᴀʟ ᴘᴜʙʟɪᴄ ʟɪᴄᴇɴꜱᴇ ᴠᴇʀꜱɪᴏɴ 3, 29 ᴊᴜɴᴇ 2007 ᴄᴏᴘʏʀɪɢʜᴛ (ᴄ) 2007 ꜰʀᴇᴇ ꜱᴏꜰᴛᴡᴀʀᴇ ꜰᴏᴜɴᴅᴀᴛɪᴏɴ
//•⬡• ᴇᴠᴇʀʏᴏɴᴇ ɪꜱ ᴘᴇʀᴍɪᴛᴛᴇᴅ ᴛᴏ 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 ᴠᴇʀʙᴀᴛɪᴍ ᴄᴏᴘɪᴇꜱ ᴏꜰ ᴛʜɪꜱ ʟɪᴄᴇɴꜱᴇ ᴅᴏᴄᴜᴍᴇɴᴛ, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//•⬡• —••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under Apache License
("⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡");
const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};

exports.getBuffer = getBuffer;
exports.uptotele = uptotele;
("⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡");
//•⬡• ɢɴᴜ ɢᴇɴᴇʀᴀʟ ᴘᴜʙʟɪᴄ ʟɪᴄᴇɴꜱᴇ ᴠᴇʀꜱɪᴏɴ 3, 29 ᴊᴜɴᴇ 2007 ᴄᴏᴘʏʀɪɢʜᴛ (ᴄ) 2007 ꜰʀᴇᴇ ꜱᴏꜰᴛᴡᴀʀᴇ ꜰᴏᴜɴᴅᴀᴛɪᴏɴ
//•⬡• ᴇᴠᴇʀʏᴏɴᴇ ɪꜱ ᴘᴇʀᴍɪᴛᴛᴇᴅ ᴛᴏ 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 ᴠᴇʀʙᴀᴛɪᴍ ᴄᴏᴘɪᴇꜱ ᴏꜰ ᴛʜɪꜱ ʟɪᴄᴇɴꜱᴇ ᴅᴏᴄᴜᴍᴇɴᴛ, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//•⬡• —••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under Apache License
("⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡");
