let user = global.DATABASE.data.users[chat.sender];
if (user.afk > -1) {
  chat.reply(
    `
you stop AFK${user.afkReason ? " after " + user.afkReason : ""}
During ${clockString(new Date() - user.afk)}
`.trim()
  );
  user.afk = -1;
  user.afkReason = "";
}
let jids = [
  ...new Set([
    ...(chat.mentionedJid || []),
    ...(chat.quoted ? [chat.quoted.sender] : []),
  ]),
];
for (let jid of jids) {
  let user = global.DATABASE.data.users[jid];
  if (!user) continue;
  let afkTime = user.afk;
  if (!afkTime || afkTime < 0) continue;
  let reason = user.afkReason || "";
  chat.reply(
    `
Don't tag him!
he's AFK ${reason ? "with reason " + reason : "no reason"}
During ${clockString(new Date() - afkTime)}
`.trim()
  );
}
return true;

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let chat = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, chat, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
