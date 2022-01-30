const Regex = {
  VideoID: /^[a-zA-Z0-9-_]{11}$/,
  VideoURL:
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
  PlaylistID: /(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}/,
  PlaylistURL:
    /https?:\/\/(www.)?youtube.com\/playlist\?list=((PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41})/,
  SCTrack:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\/?$/,
  SCPlaylist:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/sets\/([A-Za-z0-9_-]+)\/?$/,
  Spotify: /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/,
  Whatsapp:
    /^(https?:\/\/)?chat\.whatsapp\.com\/(?:invite\/)?([a-zA-Z0-9_-]{22})$/,
};

function Body_Check(Argument) {
  if (Regex.Whatsapp.test(Argument)) {
    return true;
  } else if (Regex.VideoURL.test(Argument)) {
    return false;
  } else if (Regex.VideoURL.test(Argument)) {
    return false;
  } else if (Regex.PlaylistID.test(Argument)) {
    return false;
  } else if (Regex.PlaylistURL.test(Argument)) {
    return false;
  } else if (Regex.SCTrack.test(Argument)) {
    return false;
  } else if (Regex.SCPlaylist.test(Argument)) {
    return false;
  } else if (Regex.Spotify.test(Argument)) {
    return false;
  } else if (Argument.includes("discord.gg")) {
    return true;
  } else if (Argument.includes("discord.com")) {
    return true;
  } else if (Argument.includes("https://t.me/")) {
    return true;
  } else if (Argument.includes("/t.me/")) {
    return true;
  } else if (Argument.includes("https://chat.whatsapp")) {
    return true;
  } else if (Argument.includes("wa.me/")) {
    return true;
  }
  return false;
}
module.exports.Body_Check = Body_Check;
