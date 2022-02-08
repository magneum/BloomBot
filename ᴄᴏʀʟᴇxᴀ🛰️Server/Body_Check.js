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
if (
!Regex.Whatsapp.test(Argument) &&
!Regex.VideoURL.test(Argument) &&
!Regex.PlaylistID.test(Argument) &&
!Regex.PlaylistURL.test(Argument) &&
!Regex.SCTrack.test(Argument) &&
!Regex.SCPlaylist.test(Argument) &&
!Regex.Spotify.test(Argument)
) {
return true;
// } else if (
//   Argument.includes("https:") &&
//   Argument.includes("www.") &&
//   Argument.includes("wa.me/") &&
//   Argument.includes("https://chat.whatsapp") &&
//   Argument.includes("/t.me/") &&
//   Argument.includes("https://t.me/") &&
//   Argument.includes("discord.com") &&
//   Argument.includes("discord.gg")
// ) {
// return true;
} else {
return false;
}
}
module.exports.Body_Check = Body_Check;
// if (Regex.VideoID.test(GotBody) === true) {
//   console.log(Regex.VideoID.test(GotBody));
// } else if (Regex.VideoURL.test(GotBody) === true) {
//   console.log(Regex.VideoURL.test(GotBody));
// } else if (Regex.PlaylistID.test(GotBody) === true) {
//   console.log(Regex.PlaylistID.test(GotBody));
// } else if (Regex.PlaylistURL.test(GotBody) === true) {
//   console.log(Regex.PlaylistURL.test(GotBody));
// } else if (Regex.SCTrack.test(GotBody) === true) {
//   console.log(Regex.SCTrack.test(GotBody));
// } else if (Regex.SCPlaylist.test(GotBody) === true) {
//   console.log(Regex.SCPlaylist.test(GotBody));
// } else if (Regex.Spotify.test(GotBody) === true) {
//   console.log(Regex.Spotify.test(GotBody));
