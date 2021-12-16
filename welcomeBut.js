try {
  𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(`${MemNum.split(`@`)[0]}@c.us`);
} catch {
  𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `https://i.postimg.cc/3wfrmmpB/NoPP.jpg`;
}
download(
  𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
  {
    directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/`,
    filename: `𝕻𝕻𝖑𝖊𝖙𝖊𝖗.jpg`,
  },
  async function (ℓαвєяяσя) {
    if (ℓαвєяяσя) throw ℓαвєяяσя;
    const weltext = ᴛᴡᴇʟ[Math.floor(Math.random() * ᴛᴡᴇʟ.length)];
    personcum = MemNum.substring(0, MemNum.length - 15);
    let content = fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/𝕻𝕻𝖑𝖊𝖙𝖊𝖗.jpg`);
    const media = await ӄʀǟӄɨռʐ.prepareMessage(
      GroupID,
      content,
      MessageType.image
    );
    return await ӄʀǟӄɨռʐ
      .sendMessage(
        GroupID,
        {
          contentText: `@${personcum}
${weltext}
┌───────⭓
│⬘𝗕𝗶𝗼: ${GroupMemBio.status}
│⬘𝗠𝗲𝗺𝗯𝗲𝗿𝘀: ${GroupMemG}
│⬘𝗚𝗿𝗼𝘂𝗽: ${GroupMemData.subject}
└───────────⭓

${Fetched.message}`,
          footerText: `*© Mïzµkï* _${vers.vers}_`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}help`,
              buttonText: { displayText: `${ᴋᴇɪ}help` },
              type: 1,
            },
            {
              buttonId: `${ᴋᴇɪ}mizuki`,
              buttonText: { displayText: `${ᴋᴇɪ}mizuki` },
              type: 1,
            },
          ],
          headerType: 4,
          imageMessage: media.message.imageMessage,
        },
        MessageType.buttonsMessage,
        {
          contextInfo: {
            mentionedJid: [MemNum],
          },
        }
      )
      .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
  }
);
