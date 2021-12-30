// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Second_Try_Lyrics = require(`songlyrics`).default;
const First_Try_Lyrics = require("genius-lyrics");
const Third_Try_Lyrics = require(`music-lyrics`);
const GeniusClient = new First_Try_Lyrics.Client();
console.clear();
const Song = "Faded";
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
(async () => {
  console.log(`⬡==========================⬡    🍁Below Is For Genius-Lyrics`);
  const searches = await GeniusClient.songs.search(Song);
  const GeniusSong = searches[0];
  const Geniuslyrics = await GeniusSong.lyrics();
  console.log(
    `${GeniusSong.raw.title}
${GeniusSong.raw.url}
${GeniusSong.raw.song_art_image_thumbnail_url}
${Geniuslyrics}`
  );
  console.log(`⬡==========================⬡    🍁Below Is For Music-Lyrics`);
  const lyricssong = await Second_Try_Lyrics(Song);
  console.log(
    `${lyricssong.source.name}
${lyricssong.source.link}
${lyricssong.lyrics}`
  );
  console.log(`⬡==========================⬡    🍁Below Is For Song-Lyrics`);
  const lyric = await Third_Try_Lyrics.search(Song);
  console.log(lyric);
})();
