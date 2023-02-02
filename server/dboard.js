("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../global.js");
module.exports = async (νℓкуяє, vcнaт, updatedb) => {
  try {
    𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await νℓкуяє.profilePictureUrl(vcнaт.sender, "image");
  } catch {
    𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "https://i.postimg.cc/qBKwmM24/vlkyre.jpg";
  }
  await νℓкуяє.dashboard.findOne(
    {
      ID: vcнaт.sender,
    },
    async (error, udBase) => {
      if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
      if (!udBase) {
        new νℓкуяє.dashboard({
          ID: vcнaт.sender,
          profile: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞,
          username: νℓкуяє.pushname,

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
          ytvideo: 0,

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
          antinsfw: 0,
          delete: 0,
          demote: 0,
          group: 0,
          promote: 0,
          kick: 0,
          setdesc: 0,
          seticon: 0,
          tagall: 0,

          image: 0,
          neko: 0,
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
          foxgirl: 0,
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
          vlkyre: 0,
          dashboard: 0,

          waifu: 0,
          swaifu: 0,
          neko: 0,
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
          .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        await νℓкуяє.imgB(
          νℓкуяє,
          vcнaт,
          `*🔖Here, For ${νℓкуяє.pushname}:*
> Your Dashboard has been made.
> Visit ⚙️webpage or retype previous command.
> Remember that since bot is in beta stage, your dashboard is going to be temporary.

*⚙️Webpage:*
> bit.ly/magneum
> Login To Your Dashboard`,
          "./src/login.png"
        );
        return updatedb(udBase);
      }
      udBase.username = `${νℓкуяє.pushname}`;
      udBase.profile = `${𝕯𝖎𝖘𝖕𝖑𝖆𝖞}`;
      return updatedb(udBase);
    }
  );
};
