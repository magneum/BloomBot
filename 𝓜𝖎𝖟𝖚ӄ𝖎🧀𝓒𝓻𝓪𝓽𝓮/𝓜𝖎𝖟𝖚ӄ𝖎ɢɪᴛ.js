`⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
//•⬡• ɢɴᴜ ɢᴇɴᴇʀᴀʟ ᴘᴜʙʟɪᴄ ʟɪᴄᴇɴꜱᴇ ᴠᴇʀꜱɪᴏɴ 3, 29 ᴊᴜɴᴇ 2007 ᴄᴏᴘʏʀɪɢʜᴛ (ᴄ) 2007 ꜰʀᴇᴇ ꜱᴏꜰᴛᴡᴀʀᴇ ꜰᴏᴜɴᴅᴀᴛɪᴏɴ
//•⬡• ᴇᴠᴇʀʏᴏɴᴇ ɪꜱ ᴘᴇʀᴍɪᴛᴛᴇᴅ ᴛᴏ 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 ᴠᴇʀʙᴀᴛɪᴍ ᴄᴏᴘɪᴇꜱ ᴏꜰ ᴛʜɪꜱ ʟɪᴄᴇɴꜱᴇ ᴅᴏᴄᴜᴍᴇɴᴛ, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//•⬡• —••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under Apache License
`⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const git = require(`simple-git`)();
const chalk = require(`chalk`);
const exec = require(`child_process`).exec;
const gitPull = async () => {
  await git.fetch();
  var newCommits = await git.log([`KrakinzLab..origin/KrakinzLab`]);
  if (newCommits.total) {
    console.log(chalk.blueBright(`💡⬰ New Update pending, updating...`));
    await git.pull(`origin`, `KrakinzLab`, (err, update) => {
      if (update && update.summary.changes) {
        if (update.files.includes(`package.json`)) {
          exec(`npm install`).stderr.pipe(process.stderr);
        }
        console.log(
          chalk.greenBright(`💡⬰ 𝗔𝘂𝘁𝗼-𝗨𝗽𝗱𝗮𝘁𝗲𝗱 ⚡𝐌𝐞𝐞𝟔™ 𝘄𝗶𝘁𝗵 𝗹𝗮𝘁𝗲𝘀𝘁 𝗰𝗵𝗮𝗻𝗴𝗲𝘀.`)
        );
      } else if (err) {
        console.log(
          chalk.redBright(
            `❌⬰ 𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐌𝐞𝐞𝟔™ 𝘂𝗽𝗱𝗮𝘁𝗲 𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`
          )
        );
      }
    });
  } else {
    console.log(chalk.greenBright(`💡⬰ ⚡𝐌𝐞𝐞𝟔™ 𝗶𝘀 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗼𝗻 𝗹𝗮𝘁𝗲𝘀𝘁 𝘃𝗲𝗿𝘀𝗶𝗼𝗻.`));
  }
};

module.exports = gitPull;
`⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
//•⬡• ɢɴᴜ ɢᴇɴᴇʀᴀʟ ᴘᴜʙʟɪᴄ ʟɪᴄᴇɴꜱᴇ ᴠᴇʀꜱɪᴏɴ 3, 29 ᴊᴜɴᴇ 2007 ᴄᴏᴘʏʀɪɢʜᴛ (ᴄ) 2007 ꜰʀᴇᴇ ꜱᴏꜰᴛᴡᴀʀᴇ ꜰᴏᴜɴᴅᴀᴛɪᴏɴ
//•⬡• ᴇᴠᴇʀʏᴏɴᴇ ɪꜱ ᴘᴇʀᴍɪᴛᴛᴇᴅ ᴛᴏ 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 ᴠᴇʀʙᴀᴛɪᴍ ᴄᴏᴘɪᴇꜱ ᴏꜰ ᴛʜɪꜱ ʟɪᴄᴇɴꜱᴇ ᴅᴏᴄᴜᴍᴇɴᴛ, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//•⬡• —••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under Apache License
`⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
