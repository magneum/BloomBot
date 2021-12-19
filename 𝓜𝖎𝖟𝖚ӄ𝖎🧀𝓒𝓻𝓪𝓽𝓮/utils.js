// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
class Handlers {
  constructor(ӄʀǟӄɨռʐ) {
    this.sendMsessage = this.sendMsessage;
  }
  sendMsessage(id, content) {
    this.sendMessage(id, content, MessageType.text);
  }
}
module.exports = Handlers;
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
