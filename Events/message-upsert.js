("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (update, νℓкуяє, νkmake, store, νℓpage) => {
  system = require("fs");
  Spinnies = require("spinnies");
  νTēxt = update.messages[0];
  if (!νTēxt.message) return;
  νTēxt.message =
    Object.keys(νTēxt.message)[0] === "ephemeralMessage"
      ? νTēxt.message.ephemeralMessage.message
      : νTēxt.message;
  if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
  if (!νℓкуяє.public && !νTēxt.key.fromMe && update.type === "notify") return;
  if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
  νcнαт = await νkmake(νℓкуяє, νTēxt, store);

  spinner = {
    interval: 100,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  spinnies = new Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: spinner,
  });
  // spinnies.add("νℓкуяє", {
  // text: "🛰️...",
  // });
  await require("../Core/νc໐rē.js")(
    νℓкуяє,
    νcнαт,
    update,
    store,
    spinnies,
    νℓpage,
    async (coreback) => {
      gmd = νcнαт.isGroup
        ? await νℓкуяє.groupMetadata(νcнαт.chat).catch((e) => {})
        : "";
      gnm = νcнαт.isGroup ? gmd.subject : "";
      gpt = νcнαт.isGroup ? await gmd.participants : "";
      gadm = νcнαт.isGroup
        ? await gpt.filter((v) => v.admin !== null).map((v) => v.id)
        : "";
      cadm = νcнαт.isGroup ? gadm.includes(νcнαт.sender) : false;
      Today = new Date();
      if (νcнαт.isGroup) {
        gN = `<p style="font-size:1.5vw; color:#cec3a8"><b>🎋𝐆𝐫𝐨𝐮𝐩-𝐍𝐚𝐦𝐞:</b> ${gnm}`;
      } else {
        gN = `<p style="font-size:1.5vw; color:#cec3a8"><b>🎋𝐆𝐫𝐨𝐮𝐩-𝐍𝐚𝐦𝐞:</b> null`;
      }
      ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
      LogText = `
<br>┌〨 νℓкуяє вσт ву кяукηz
<br>│╔══『 🎐𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧🎐』
<br>│║✡ 🖊️ 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: <I>${νℓкуяє.budy || νℓкуяє.mtype}</I>
<br>│║✡ ❣️ 𝐔𝐬𝐞𝐫-𝐍𝐚𝐦𝐞: <I>${νℓкуяє.pushname}</I>
<br>│║✡ 📱 𝐔𝐬𝐞𝐫-𝐍𝐮𝐦𝐛𝐞𝐫: <I>${νcнαт.sender}</I>
<br>│║✡ 👑 𝐔𝐬𝐞𝐫-𝐀𝐝𝐦𝐢𝐧: <I>${cadm}</I>
<br>│║✡ ${gN}
<br>│║✡ 💬 𝐂𝐡𝐚𝐭-𝐈𝐝: <I>${νcнαт.chat}</I>
<br>│║✡ 🗓️𝐃𝐚𝐭𝐞: <I>${Today.getDate()}d : ${
        Today.getMonth() + 1
      }m : ${Today.getFullYear()}y</I>
<br>│║✡ ⏰𝐓𝐢𝐦𝐞: <I>${Today.getHours()}h : ${Today.getMinutes()}m : ${Today.getSeconds()}s</I>
<br>│║✡ ${coreback}
<br>└╚═══════⋑`;
      // system.appendFile("Bin/νℓкуяє.txt", "\n" + LogText, function (error) {
      // if (error) console.log(error);
      // });
      νℓpage.get("/vlkyre", (req, res) => {
        res.send(`<!DOCTYPE html>
<html>
<head>
<style>
h1 {
text-align: center;
}
h2 {
text-align: center;
}
p {
text-align: center;
}
div {
text-align: center;
}
</style>
</head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="refresh" content="2">
<body style="background-color: #202020">
<h1 style="font-size:4vw; color:rgb(255, 255, 255);">『 🎐Live Information🎐 』</h1>
<p style="font-size:1.5vw; color:#cec3a8"><b>🖊️Command:</b> <I>${
          νℓкуяє.budy || νℓкуяє.mtype
        }</I>
<p style="font-size:1.5vw; color:#cec3a8"><b>❣️User-Name:</b> <I>${
          νℓкуяє.pushname
        }</I>
<p style="font-size:1.5vw; color:#cec3a8"><b>📱User_Number:</b> <I>${
          νcнαт.sender
        }</I>
<p style="font-size:1.5vw; color:#cec3a8"><b>👑Is-User-Admin:</b> <I>${cadm}</I>
<p style="font-size:1.5vw; color:#cec3a8">${gN}
<p style="font-size:1.5vw; color:#cec3a8"><b>💬Chat-Id:</b> <I>${νcнαт.chat}</I>
<p style="font-size:1.5vw; color:#cec3a8"><b>🗓️Date:</b> <I>${Today.getDate()}d : ${
          Today.getMonth() + 1
        }m : ${Today.getFullYear()}y</I>
<p style="font-size:1.5vw; color:#cec3a8"><b>⏰Time:</b> <I>${Today.getHours()}h : ${Today.getMinutes()}m : ${Today.getSeconds()}s</I>
<p style="font-size:1.5vw; color:#cec3a8">${coreback}
<br>
<br>
<br>
<br>
<h2 style="font-size:1.6vw; color:rgb(255, 255, 255);"><i>❝ ⒸVLKYRE: Powered By KrakinzLab™, Licensed Under Apache License Version 2.0 ❞</i></h2>
</body>
</html>`);
      });
      console.log(coreback);
      // spinnies.succeed("νℓкуяє", { text: coreback });
    }
  );
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
