"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
const modes = {
  noob: [-3, 3, -3, 3, "+-", 15000, 10],
  easy: [-10, 10, -10, 10, "*/+-", 20000, 40],
  medium: [-40, 40, -20, 20, "*/+-", 40000, 150],
  hard: [-100, 100, -70, 70, "*/+-", 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, "*/", 99999, 9999],
  impossible: [
    -99999999999,
    99999999999,
    -99999999999,
    999999999999,
    "*/",
    30000,
    35000,
  ],
  impossible2: [
    -999999999999999,
    999999999999999,
    -999,
    999,
    "/",
    30000,
    50000,
  ],
};

const operators = {
  "+": "+",
  "-": "-",
  "*": "×",
  "/": "÷",
};

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from];
  from = Math.floor(from);
  to = Math.floor(to);
  return Math.floor((to - from) * Math.random() + from);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function genMath(mode) {
  return new Promise((resolve, reject) => {
    const [a1, a2, b1, b2, ops, time, bonus] = modes[mode];
    const a = randomInt(a1, a2);
    const b = randomInt(b1, b2);
    const op = pickRandom([...ops]);
    const result = new Function(
      `return ${a} ${op.replace("/", "*")} ${b < 0 ? `(${b})` : b}`,
    )();
    if (op == "/") [a, result] = [result, a];
    hasil = {
      soal: `${a} ${operators[op]} ${b}`,
      mode: mode,
      waktu: time,
      hadiah: bonus,
      jawaban: result,
    };
    resolve(hasil);
  });
}

module.exports = { modes, operators, randomInt, pickRandom, genMath };
