`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const Second_Try_Lyrics = require(`songlyrics`).default;
const First_Try_Lyrics = require(`genius-lyrics`);
const Third_Try_Lyrics = require(`music-lyrics`);
const GeniusClient = new First_Try_Lyrics.Client();
console.clear();
const Song = `Sayonara`;
(async () => {
  try {
    try {
      console.log(`🍹Genius-Lyrics🍹    ⬡==========================⬡`);
      const searches = await GeniusClient.songs.search(Song);
      const GeniusSong = searches[0];
      const Geniuslyrics = await GeniusSong.lyrics();
      console.log(
        `${GeniusSong.raw.title}
${GeniusSong.raw.url}
${GeniusSong.raw.song_art_image_thumbnail_url}
${Geniuslyrics}`
      );
    } catch (e) {
      try {
        console.log(`🍹Music-Lyrics🍹    ⬡==========================⬡`);
        const lyricssong = await Second_Try_Lyrics(Song);
        console.log(
          `${lyricssong.source.name}
${lyricssong.source.link}
${lyricssong.lyrics}`
        );
      } catch (e) {
        try {
        } catch (e) {
          console.log(`🍹Song-Lyrics🍹    ⬡==========================⬡`);
          const lyric = await Third_Try_Lyrics.search(Song);
          console.log(lyric);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
})();
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;