# spdl-core

Spotify track downloader module. Written in pure javascript.

# Support
You can contact us for support on our [chat server](https://discord.gg/AUfTUJA)

# Usage

```js
const fs = require('fs');
const spdl = require('spdl-core').default;
// Typescript: import spdl from 'spdl-core';

spdl.getInfo('https://open.spotify.com/track/3fjmSxt0PskST13CSdBUFx?si=e420cd3a80834011').then(infos => {
  spdl(infos.url).then(stream => {
    stream.on('end', () => console.log('Done!'));
    stream.pipe(fs.createWriteStream(`${infos.title}.mp3`));
  });
});
```

# API
### async spdl(url, options?)

Downloads the track from the given url. Returns a [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable)
Options are the options for discord-ytdl-core

### async spdl.getInfo(url)

Gives the information of a track

### spdl.validateURL(url, type?)

Returns true if url is a spotify link

## Limitations

Generated download links are valid for 6 hours, and may only be downloadable from the same IP address.

# Install

```bash
npm install spdl-core@latest
```

Or for Yarn users:
```bash
yarn add spdl-core@latest
```

Make sure you're installing the latest version of spdl-core to keep up with the latest fixes.

# Discord Bot

You'll need to install `discord.js` and `@discordjs/opus`.

```js
const { MessageEmbed, Client } = require('discord.js');
const spdl = require('spdl-core');
function formatDuration(duration) {
  let seconds = duration / 1000;
  return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`;
}

const client = new Client();
client.login('Your Discord Bot Token');
client.on('ready', () => console.log('Ready'));

client.on('message', async (msg) => {
  if (!msg.content.startsWith('!play')) return;
  const url = msg.content.split('!play ')[1];
  if (!spdl.validateURL(url)) return msg.channel.send('Invalid URL');
  const channel = msg.member.voice.channel;
  if (!channel) return msg.channel.send('Not in a voc channel');
  try {
    const connection = await channel.join();
    connection
      .play(await spdl(url))
      .on('error', e => console.error(e));
    const infos = await spdl.getInfo(url);
    const embed = new MessageEmbed()
      .setTitle(`Now playing: ${infos.title}`)
      .setURL(infos.url)
      .setColor('#1DB954')
      .addField('Artist', infos.artist, true)
      .addField('Duration', formatDuration(infos.duration), true)
      .setThumbnail(infos.thumbnail);
    msg.channel.send(embed);
  } catch (err) {
    console.error(err);
    msg.channel.send(`An error occurred: ${err.message}`);
  }
});
```

# Note

There is nothing illegal here, the module just searches for the song on Youtube and downloads it.
