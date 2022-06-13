`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import AʀƈȶɨӼ from "./msb";
import {
  MiscMessageGenerationOptions,
  AnyMessageContent,
  GroupParticipant,
  GroupMetadata,
  WASocket,
  proto,
} from "@adiwajshing/baileys";
import { MessageType } from "./message-type";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
class Client {
  ӄʀʏȶɛӄ: WASocket;
  constructor(ӄʀʏȶɛӄ: WASocket) {
    this.ӄʀʏȶɛӄ = ӄʀʏȶɛӄ;
  }
  async sendMessage(
    jid: string,
    content: any,
    type: string,
    options?: any,
    Fox?: any
  ): Promise<any> {
    let ext: MiscMessageGenerationOptions;
    let res: proto.WebMessageInfo;
    let ops: AnyMessageContent;
    if (type === MessageType.text) {
      ops = {
        text: content,
      };
      ext = {
        quoted: Fox,
      };
      if (options?.contextInfo?.mentionedJid) {
        ops.mentions = options.contextInfo.mentionedJid;
      }
      ext.quoted = Fox;
      res = await this.ӄʀʏȶɛӄ.sendMessage(jid, ops);
    } else if (type === MessageType.sticker) {
      res = await this.ӄʀʏȶɛӄ.sendMessage(jid, {
        sticker: new Buffer(content),
      });
    } else if (type === MessageType.audio) {
      res = await this.ӄʀʏȶɛӄ.sendMessage(jid, {
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
      res = await this.ӄʀʏȶɛӄ.sendMessage(jid, ops);
    } else if (type == MessageType.audio) {
      res = await this.ӄʀʏȶɛӄ.sendMessage(jid, {
        audio: content,
        mimetype: "audio/mp3",
      });
    } else if (type === MessageType.buttonsMessage) {
      res = await this.ӄʀʏȶɛӄ.sendMessage(jid, content);
    } else if (type == MessageType.video) {
      ops = {
        video: content,
      };
      if (options?.caption) {
        ops.caption = options.caption;
      }
      res = await this.ӄʀʏȶɛӄ.sendMessage(jid, ops);
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
      await this.ӄʀʏȶɛӄ.sendMessage(jid, ops);
      res = await this.ӄʀʏȶɛӄ.sendMessage(jid, ops2);
    }
    return res;
  }
  async deleteMessage(jid: string, key: any) {
    await this.ӄʀʏȶɛӄ.sendMessage(jid, {
      delete: key,
    });
  }
  async getGroupMetaData(jid: string, AʀƈȶɨӼ: AʀƈȶɨӼ) {
    const groupMetadata: GroupMetadata = jid.endsWith("@g.us")
      ? await this.ӄʀʏȶɛӄ.groupMetadata(jid)
      : null;
    const getGroupAdmins = (participants: GroupParticipant[]): string[] => {
      var admins: string[] = [];
      for (var i in participants) {
        participants[i].admin ? admins.push(participants[i].id) : "";
      }
      return admins;
    };
    AʀƈȶɨӼ.groupName = AʀƈȶɨӼ.isGroup ? groupMetadata.subject : null;
    AʀƈȶɨӼ.groupMembers = AʀƈȶɨӼ.isGroup ? groupMetadata.participants : null;
    AʀƈȶɨӼ.groupAdmins = AʀƈȶɨӼ.isGroup
      ? getGroupAdmins(AʀƈȶɨӼ.groupMembers)
      : null;
    AʀƈȶɨӼ.groupId = AʀƈȶɨӼ.isGroup ? groupMetadata.id : null;
    AʀƈȶɨӼ.isBotGroupAdmin = AʀƈȶɨӼ.isGroup
      ? AʀƈȶɨӼ.groupAdmins.includes(AʀƈȶɨӼ.owner)
      : false;
    AʀƈȶɨӼ.isSenderGroupAdmin = AʀƈȶɨӼ.isGroup
      ? AʀƈȶɨӼ.groupAdmins.includes(AʀƈȶɨӼ.sender)
      : false;
  }
}
export = Client;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
