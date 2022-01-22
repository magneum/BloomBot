`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const git = require(`simple-git`)();
const chalk = require(`chalk`);
const exec = require(`child_process`).exec;
const gitPull = async () => {
  await git.fetch();
  var newCommits = await git.log([`KrakinzLab..origin/KrakinzLab`]);
  if (newCommits.total) {
    exec(`git config pull.rebase false`);
    console.log(chalk.blueBright(`💡INFO ⬰ 𝐍𝐞𝐰 𝐔𝐩𝐝𝐚𝐭𝐞 𝐩𝐞𝐧𝐝𝐢𝐧𝐠, 𝐮𝐩𝐝𝐚𝐭𝐢𝐧𝐠...`));
    await git.pull(`origin`, `KrakinzLab`, (err, update) => {
      if (update && update.summary.changes) {
        if (update.files.includes(`package.json`)) {
          exec(`npm i --force`);
        }
        console.log(
          chalk.bgGreenBright.black(
            `💡INFO ⬰ 𝗔𝘂𝘁𝗼-𝗨𝗽𝗱𝗮𝘁𝗲𝗱 ⚡𝐒𝐚𝐤𝐮𝐫𝐚™ 𝘄𝗶𝘁𝗵 𝗹𝗮𝘁𝗲𝘀𝘁 𝗰𝗵𝗮𝗻𝗴𝗲𝘀.`
          )
        );
      } else if (err) {
        console.log(
          chalk.bgRedBright.black(
            `❌ERROR ⬰ 𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐒𝐚𝐤𝐮𝐫𝐚™ 𝘂𝗽𝗱𝗮𝘁𝗲 𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`
          )
        );
      }
    });
  } else {
    console.log(
      chalk.bgGreenBright.black(
        `💡INFO ⬰ ⚡𝐒𝐚𝐤𝐮𝐫𝐚™ 𝗶𝘀 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗼𝗻 𝗹𝗮𝘁𝗲𝘀𝘁 𝘃𝗲𝗿𝘀𝗶𝗼𝗻.`
      )
    );
  }
};

module.exports = gitPull;
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
