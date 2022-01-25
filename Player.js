exec(
  `youtube-dl --extract-audio --audio-format mp3 -o '${ꜱᴇɴᴅᴇʀeceived}_${youfound.title}.%(ext)s'  ${youfound.url}`,
  (Error) => {
    if (Error) return console.log(Error);
    console.log("Done");
  }
);
