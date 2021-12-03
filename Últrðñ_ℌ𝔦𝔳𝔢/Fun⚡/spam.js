// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
    MessageType,
    Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
    name: 'spam',
    description: 'spams a certain message for given number of times',
    ƈʏɮօʀɢʍօʀɛ: `*Spam*\n\nSpam Messages. \n\n*!spam [count text]*\nOR\nreply *!spam [count]* to any message`,
    async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, Arc) {
        let count = Number(Arc.shift());
        if (isNaN(count)) {
            await ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Invalid count`, MessageType.text);
            return 0;
        }
        if (count > 0) {
            count = parseInt(count);
        } else {
            await ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Count can't be zero.`, MessageType.text);
            return 0;
        }
        if (Arc.length) {
            let text = Arc.join(' ');
            for (let i = 0; i < count; i++)
                await ӄʀǟӄɨռʐ.sendMessage(
                    Últrðñ.chatId,
                    text,
                    MessageType.text
                );
        } else {
            await ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `No text found for spamming!!! Please read !help spam.`, MessageType.text);
        }
    }
};