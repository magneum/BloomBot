module.exports = {
    cooldown: 5,
    name: "google",
    description: "Search anything on google",
    botPerms: ["EMBED_LINKS"],
    run: async (client, message, args) => {
        const name = args.join(" ");
        const name2 = args.join("+");
        const google = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`;
        if (!name2) {
            // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
            const redArea = `❌${poke.toUpperCase()} says 𝐏𝐨𝐤é𝐎𝐩𝐬𝐢𝐞 \n-⧪   Wrong Usage !!\n\n🧀𝐔𝐬𝐚𝐠𝐞\n+⧪   ${message.client.prefix
        }${newScpt.toLowerCase()} <search query>`;
            const cyanArea = `💡${newScpt} Details:\n\nSearch anything on Google!`;
            require("dotenv").config();
            await message.react("❌");
            return await message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTimestamp()
                    .setURL("https://github.com/krakinz")
                    .setColor(process.env.redArea || "#B33F40")
                    .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
                    .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
                    .setAuthor("⚡XΣƬЯӨП⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
                    .setFooter(`👈🏽Requested by ${message.author.username}`, message.author.avatarURL({
                        dynamic: true
                    })).setDescription(`**\`\`\`diff
${redArea}\`\`\`
\`\`\`fix
${cyanArea}
\`\`\`**`),
                ],
            });
        }
        const embed = new Discord.MessageEmbed()
            .setAuthor(
                "Google",
                `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
            )
            .setThumbnail(
                `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
            )
            .setDescription(
                `**Searched for: **\n${name} \n\n**Result: **\n[Here's What I found](https://google.com/search?q=${name2})`
            )
            .setThumbnail(google)
            .setColor("RANDOM");
        message.reply({
            embeds: [embed]
        });
    },
};