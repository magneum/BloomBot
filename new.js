(async () => {
  const akaneko = require(`akaneko`);
  const Raw = await akaneko.nsfw.ass();
  if (
    !Raw.endsWith(`.png`) &&
    !Raw.endsWith(`.jpg`) &&
    !Raw.endsWith(`.jpeg`)
  ) {
    const Raw = await akaneko.nsfw.ass();
    Raw = Raw;
    ʟᴀʙᴛᴇꜱᴛ = Raw;
  } else {
    ʟᴀʙᴛᴇꜱᴛ = Raw;
  }
  console.log(ʟᴀʙᴛᴇꜱᴛ);
})();
