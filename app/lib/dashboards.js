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
require("@/config/index.js");
module.exports = async (BloomBot, chatkey, updatedb) => {
  try {
    ProfilePic = await BloomBot.profilePictureUrl(chatkey.sender, "image");
  } catch {
    ProfilePic = "i.postimg.cc/qBKwmM24/chatkeybot.png";
  }
  await BloomBot.dashboard.findOne(
    {
      Id: chatkey.sender,
    },
    async (error, udBase) => {
      if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
      if (!udBase) {
        new BloomBot.dashboard({
          Id: chatkey.sender,
          profile: ProfilePic,
          username: BloomBot.pushname,

          bite: 0,
          blush: 0,
          bonk: 0,
          bored: 0,
          confused: 0,
          cry: 0,
          cuddle: 0,
          dance: 0,
          goodnight: 0,
          happy: 0,
          highfive: 0,
          hug: 0,
          kill: 0,
          kiss: 0,
          nervous: 0,
          pat: 0,
          poke: 0,
          poke: 0,
          punch: 0,
          sad: 0,
          scream: 0,
          slap: 0,
          smile: 0,
          stare: 0,
          wave: 0,
          wink: 0,
          yeet: 0,
          yes: 0,

          sticker: 0,
          tinyurl: 0,
          toimg: 0,
          tourl: 0,
          carbon: 0,
          ship: 0,
          tts: 0,

          ytaudio: 0,

          panning: 0,
          bassbost: 0,
          echo: 0,
          flanger: 0,
          nightcore: 0,
          phaser: 0,
          reverse: 0,
          slow: 0,
          speed: 0,
          subboost: 0,
          superslow: 0,
          superspeed: 0,
          surround: 0,
          vaporwave: 0,
          vibrato: 0,

          balance: 0,
          buy: 0,
          daily: 0,
          fish: 0,
          gamble: 0,
          inv: 0,
          pay: 0,
          rob: 0,
          store: 0,
          work: 0,
          zoo: 0,

          antilink: 0,
          allownsfw: 0,
          delete: 0,
          demote: 0,
          group: 0,
          promote: 0,
          kick: 0,
          setdesc: 0,
          seticon: 0,
          tagall: 0,

          image: 0,
          whats: 0,
          pinterest: 0,
          waifu: 0,
          wallpaper: 0,

          advice: 0,
          anime: 0,
          fact: 0,
          google: 0,
          chordlist: 0,
          getChord: 0,
          pokedex: 0,
          gify: 0,
          lyrics: 0,
          ytsearch: 0,
          instagram: 0,
          joke: 0,
          manga: 0,
          meme: 0,
          quote: 0,
          reddit: 0,

          ytpanning: 0,
          ytbassboost: 0,
          ytecho: 0,
          ytflanger: 0,
          ytnightcore: 0,
          ytphaser: 0,
          ytreverse: 0,
          ytslow: 0,
          ytspeed: 0,
          ytsubboost: 0,
          ytsuperslow: 0,
          ytsuperspeed: 0,
          ytsurround: 0,
          ytvaporwave: 0,
          ytvibrato: 0,

          nsfw: 0,
          nsfw2: 0,
          bonermaterial: 0,
          nsfw411: 0,
          iwanttofuckher: 0,
          exxxtras: 0,
          distension: 0,
          bimbofetish: 0,
          christiangirls: 0,
          dirtygaming: 0,
          sexybutnotporn: 0,
          femalepov: 0,
          omgbeckylookathiscock: 0,
          sexygirls: 0,
          breedingmaterial: 0,
          canthold: 0,
          toocuteforporn: 0,
          justhotwomen: 0,
          stripgirls: 0,
          hotstuffnsfw: 0,
          uncommonposes: 0,
          gifsofremoval: 0,
          nostalgiafapping: 0,
          truefmk: 0,
          nudes: 0,
          p4k: 0,
          realgirls: 0,
          blowjobs: 0,
          milf: 0,
          milk: 0,
          milking: 0,
          lactating: 0,
          pussy: 0,
          cum: 0,
          slut: 0,
          cumslut: 0,

          ban: 0,
          broadcast: 0,
          join: 0,
          leave: 0,
          reboot: 0,
          rules: 0,
          unban: 0,
          verify: 0,

          ass: 0,
          bdsm: 0,
          blowjob: 0,
          cum: 0,
          doujin: 0,
          feet: 0,
          femdom: 0,
          whatsgirl: 0,
          glasses: 0,
          hentai: 0,
          maid: 0,
          masturbation: 0,
          netorare: 0,
          orgy: 0,
          panties: 0,
          pussy: 0,
          school: 0,
          succubus: 0,
          tentacles: 0,
          thighs: 0,
          uglyBastard: 0,
          uniform: 0,
          yuri: 0,
          zettaiRyouiki: 0,

          list: 0,
          BloomBot: 0,
          dashboard: 0,

          waifu: 0,
          swaifu: 0,
          whats: 0,
          shinobu: 0,
          megumin: 0,
          awoo: 0,
          sbully: 0,
          scuddle: 0,
          scry: 0,
          shug: 0,
          skiss: 0,
          slick: 0,
          spat: 0,
          ssmug: 0,
          sbonk: 0,
          syeet: 0,
          sblush: 0,
          ssmile: 0,
          swave: 0,
          shighfive: 0,
          shandhold: 0,
          snom: 0,
          sbite: 0,
          sglomp: 0,
          sslap: 0,
          skill: 0,
          skick: 0,
          shappy: 0,
          swink: 0,
          spoke: 0,
          sdance: 0,
          scringe: 0,

          animationlist: 0,
          audiofilterlist: 0,
          conversionlist: 0,
          downloadlist: 0,
          gameslist: 0,
          grouplist: 0,
          ownerlist: 0,
          photolist: 0,
          searchlist: 0,
          ytfilterlist: 0,
          hentailist: 0,
          nsfwlist: 0,
          sfwlist: 0,
        })
          .save()
          .catch(
            async (error) =>
              BloomBot.handlerror(BloomBot, chatkey, error),
          );
        await BloomBot.imagebutton(
          BloomBot,
          chatkey,
          `*🌻Here, for ${BloomBot.pushname}:*
> Your Dashboard has been made.
> Visit ⚙️webpage or retype previous command.
> Remember that since bot is in beta stage, your dashboard is going to be temporary.

*⚙️Webpage:*
> bit.ly/magneum
> Login To Your Dashboard`,
          BloomBot.display,
        );
        return updatedb(udBase);
      }
      udBase.username = `${BloomBot.pushname}`;
      udBase.profile = `${ProfilePic}`;
      return updatedb(udBase);
    },
  );
};
