(async () => {
  const Genius = require("genius-lyrics");
  const Client = new Genius.Client();
  const searches = await Client.songs.search(" ");
  const firstSong = searches[0];
  const lyrics = await firstSong.lyrics();
  console.clear();
  console.log(firstSong.raw.song_art_image_thumbnail_url);
  console.log(firstSong.raw.title);
  console.log(firstSong.raw.url);
  console.log(lyrics);
})();
