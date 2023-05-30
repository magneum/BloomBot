const fs = require("fs");
const path = require("path");

require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();

thisfilealias = ["lay", "out", "morelayout", "example"];
module.exports = async (
  Foxbot,
  Foxchat,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    let helpMessage = "Available commands:\n\n";
    const specialFolders = [
      "⚙️System",
      "⭕YTFilter",
      "🍁ᴏᴡɴᴇʀ",
      "🍑Hentai",
      "🐉Emotions",
      "👅NSFW",
      "💗Commands",
      "💰Games",
      "📢aFilter",
      "📥Downloader",
      "📼Conversion",
      "🔎Searches",
      "🔰Group",
      "🖼️Photogenic",
      "🦄SFW",
    ];

    for (let i = 0; i < specialFolders.length; i++) {
      const folder = specialFolders[i];
      const folderPath = path.join(__dirname, "..", "routes", folder);
      if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath);
        files.forEach((file) => {
          const fileName = path.parse(file).name.toLowerCase();
          const commandAliases =
            require(path.join(folderPath, file)).aliases || [];
          helpMessage += `Command: ${fileName}\nAliases: ${commandAliases.join(
            ", "
          )}\n\n`;
        });
      }
    }

    await Foxbot.imagebutton(
      Foxbot,
      Foxchat,
      `📚 *Help*\n\n${helpMessage}`,
      Foxbot.display
    );
  } catch (error) {
    return Foxbot.handlerror(Foxbot, Foxchat, error);
  }
};

module.exports.aliases = thisfilealias;
