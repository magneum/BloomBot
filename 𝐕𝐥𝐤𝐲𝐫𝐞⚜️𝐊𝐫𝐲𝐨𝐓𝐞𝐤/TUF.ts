`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import Vʟӄʏʀɛ from "./msb";
import {
MiscMessageGenerationOptions,
AnyMessageContent,
GroupParticipant,
GroupMetadata,
WASocket,
proto,
} from "@adiwajshing/baileys";
import { MessageType } from "./message-type";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
class Client {
ӄ𝖗𝖞ӄ𝖓𝖟: WASocket;
constructor(ӄ𝖗𝖞ӄ𝖓𝖟: WASocket) {
this.ӄ𝖗𝖞ӄ𝖓𝖟 = ӄ𝖗𝖞ӄ𝖓𝖟;
}
async sendMessage(
jid: string,
content: any,
type: string,
options?: any
): Promise<any> {
let res: proto.WebMessageInfo;
let ops: AnyMessageContent;
if (type === MessageType.text) {
ops = {
text: content,
};

if (options?.contextInfo?.mentionedJid) {
ops.mentions = options.contextInfo.mentionedJid;
}
res = await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops);
} else if (type === MessageType.sticker) {
res = await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, {
sticker: new Buffer(content),
});
} else if (type === MessageType.audio) {
res = await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, {
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
if (options?.contextInfo?.mentionedJid) {
ops.mentions = options.contextInfo.mentionedJid;
}

res = await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops);
} else if (type == MessageType.audio) {
res = await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, {
audio: content,
mimetype: "audio/mp3",
});
} else if (type === MessageType.buttonsMessage) {
ops = {
text: content,
};

if (options?.contextInfo?.mentionedJid) {
ops.mentions = options.contextInfo.mentionedJid;
}
res = await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, content);
} else if (type == MessageType.video) {
ops = {
video: content,
};
if (options?.caption) {
ops.caption = options.caption;
}

res = await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops);
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

await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops);
res = await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops2);
}
return res;
}
async deleteMessage(jid: string, key: any) {
await this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, {
delete: key,
});
}
async getGroupMetaData(jid: string, Vʟӄʏʀɛ: Vʟӄʏʀɛ) {
const groupMetadata: GroupMetadata = jid.endsWith("@g.us")
? await this.ӄ𝖗𝖞ӄ𝖓𝖟.groupMetadata(jid)
: null;
const getGroupAdmins = (participants: GroupParticipant[]): string[] => {
var admins: string[] = [];
for (var i in participants) {
participants[i].admin ? admins.push(participants[i].id) : "";
}
return admins;
};
Vʟӄʏʀɛ.groupName = Vʟӄʏʀɛ.isGroup ? groupMetadata.subject : null;
Vʟӄʏʀɛ.groupMembers = Vʟӄʏʀɛ.isGroup ? groupMetadata.participants : null;
Vʟӄʏʀɛ.groupAdmins = Vʟӄʏʀɛ.isGroup
? getGroupAdmins(Vʟӄʏʀɛ.groupMembers)
: null;
Vʟӄʏʀɛ.groupId = Vʟӄʏʀɛ.isGroup ? groupMetadata.id : null;
Vʟӄʏʀɛ.isBotGroupAdmin = Vʟӄʏʀɛ.isGroup
? Vʟӄʏʀɛ.groupAdmins.includes(Vʟӄʏʀɛ.owner)
: false;
Vʟӄʏʀɛ.isSenderGroupAdmin = Vʟӄʏʀɛ.isGroup
? Vʟӄʏʀɛ.groupAdmins.includes(Vʟӄʏʀɛ.sender)
: false;
}
}
export = Client;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
