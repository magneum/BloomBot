(async () => {
  const yts = require(`yt-search`);
  const LinkForGroups = await yts("1234567890");
  const GroupVideos = LinkForGroups.videos.slice(0, 1);
  await GroupVideos.forEach(async function (youfound) {
    if (!youfound.url.startsWith("https:")) {
        console.log("Nothing found!");
    }

  });
})();
