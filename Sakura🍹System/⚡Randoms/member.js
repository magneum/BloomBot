const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
    var ꜱᴇɴᴅᴇʀeceived = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
    `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
    const Member_Bio = await ӄʀǟӄɨռʐ.getStatus(աɦօֆɛռȶɦǟȶ, MessageType.text);
    const Member_Name = await ӄʀǟӄɨռʐ.getName(
      ӄʀǟӄɨռʐ.contacts[աɦօֆɛռȶɦǟȶ],
      (withoutContact = true)
    );
    console.log(Member_Bio);
    console.log(Member_Name);
    // getName(jid, (withoutContact = true));
    // {
    //   withoutContact = this.withoutContact || withoutContact;
    //   let chat;
    //   let v = jid.endsWith("@g.us")
    //     ? ((chat = this.chats.get(jid) || {}) && chat.metadata) || {}
    //     : jid === "0@s.whatsapp.net"
    //     ? {
    //         jid,
    //         vname: "WhatsApp",
    //       }
    //     : jid === this.user.jid
    //     ? this.user
    //     : this.contactAddOrGet(jid);
    //   return (
    //     (withoutContact ? "" : v.name) ||
    //     v.subject ||
    //     v.vname ||
    //     v.notify ||
    //     PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
    //       "international"
    //     )
    //   );
    // }
  },
};
