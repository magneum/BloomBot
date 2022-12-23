const akaneko = require("akaneko");

async function yourFunctionName() {
  // Get SFW Neko Images, uwu //
  console.log("SFW Neko: " + (await akaneko.neko()));

  // Get Lewd Neko (NSFW), owo //
  console.log("Lewd Neko:" + (await akaneko.lewdNeko()));

  // Lewd Bomb me onii-san~~ //
  console.log("Lewd Bomb: " + (await akaneko.lewdBomb(5)));

  // Get other NSFW Images //
  console.log("BDSM: " + (await akaneko.nsfw.bdsm()));
  console.log("Maid: " + (await akaneko.nsfw.maid()));
  console.log("Hentai: " + (await akaneko.nsfw.hentai()));
}

// Call your Function! //
yourFunctionName();
