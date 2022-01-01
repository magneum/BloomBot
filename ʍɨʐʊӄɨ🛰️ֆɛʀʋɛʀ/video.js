try {
  (async () => {
    const yts = require(`yt-search`);
    const LinkForGroups = await yts(`https://youtu.be/r7B7b6xz3ro`);
    const GroupVideos = LinkForGroups.videos.slice(0, 1);
    GroupVideos.forEach(async function (youfound) {
      console.clear();
      if (youfound.seconds > `1800`) {
        console.log(youfound.timestamp);
        console.log(`Sorry cannot Continue!`);
      } else {
        console.log(youfound.timestamp);
        console.log(`Nice Let me Get Your File!`);
      }
    });
  })();
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
