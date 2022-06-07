`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import νℓкуяιє from "./msb";
import {
AnyMessageContent,
GroupMetadata,
GroupParticipant,
proto,
WASocket,
} from "@adiwajshing/baileys";
import { MessageType } from "./message-type";

class Client {
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇: WASocket;
constructor(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇: WASocket) {
this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇 = ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇;
}
async sendMessage(jid: string, content: any, type: string, options?: any) {
let res: proto.WebMessageInfo;
let ops: AnyMessageContent;
if (type === MessageType.text) {
ops = {
text: content,
};
if (options?.contextInfo?.mentionedJid) {
ops.mentions = options.contextInfo.mentionedJid;
}
res = await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, ops);
} else if (type === MessageType.sticker) {
res = await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, {
sticker: new Buffer(content),
});
} else if (type === MessageType.audio) {
res = await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, {
audio: content,
mimetype: "audio/mp4",
});
} else if (type === MessageType.image) {
ops = {
image: content,
};
if (options?.caption) {
ops.caption = options.caption;
}
res = await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, ops);
} else if (type == MessageType.audio) {
res = await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, {
audio: content,
mimetype: "audio/mp3",
});
} else if (type === MessageType.buttonsMessage) {
res = await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, content);
} else if (type == MessageType.video) {
ops = {
video: content,
};
if (options?.caption) {
ops.caption = options.caption;
}
res = await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, ops);
} else if (type === MessageType.document) {
ops = {
text: options.caption,
};
let ops2: any = {
document: content,
};
if (options?.mimetype) {
ops2.mimetype = options.mimetype;
ops2.fileName = options.filename;
}
console.log(ops2);
await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, ops);
res = await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, ops2);
}
return res;
}

async deleteMessage(jid: string, key: any) {
await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(jid, {
delete: key,
});
}

async getGroupMetaData(jid: string, νℓкуяιє: νℓкуяιє) {
const groupMetadata: GroupMetadata = jid.endsWith("@g.us")
? await this.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.groupMetadata(jid)
: null;
const getGroupAdmins = (participants: GroupParticipant[]): string[] => {
var admins: string[] = [];
for (var i in participants) {
participants[i].admin ? admins.push(participants[i].id) : "";
}
return admins;
};
νℓкуяιє.groupName = νℓкуяιє.isGroup ? groupMetadata.subject : null;
νℓкуяιє.groupMembers = νℓкуяιє.isGroup ? groupMetadata.participants : null;
νℓкуяιє.groupAdmins = νℓкуяιє.isGroup
? getGroupAdmins(νℓкуяιє.groupMembers)
: null;
νℓкуяιє.groupId = νℓкуяιє.isGroup ? groupMetadata.id : null;
νℓкуяιє.isBotGroupAdmin = νℓкуяιє.isGroup
? νℓкуяιє.groupAdmins.includes(νℓкуяιє.owner)
: false;
νℓкуяιє.isSenderGroupAdmin = νℓкуяιє.isGroup
? νℓкуяιє.groupAdmins.includes(νℓкуяιє.sender)
: false;
}
}

export = Client;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;