let googleTTS = require(`google-tts-api`);
const Media = googleTTS.getAudioUrl(text, {
  lang: langCode,
  slow: false,
  host: `https://translate.google.com`,
});
