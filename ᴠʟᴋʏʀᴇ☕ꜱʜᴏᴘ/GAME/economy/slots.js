const betItems = ["🍇", "🍉", "🍌", "🍎", "🍒"];
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bet",
  aliases: ["sl"],
  category: "economy",
  description: "bet game | 9x - rare | 3x - common",
  usage: "<amount>",
  accessableby: "",
  run: async (bot, message, args) => {
    let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`);
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`❌ You are betting more than you have`);

    let moneyhelp = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`❌ Specify an amount`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = [];
    for (let i = 0; i < 3; i++) {
      number[i] = Math.floor(Math.random() * betItems.length);
    }

    if (number[0] == number[1] && number[1] == number[2]) {
      money *= 9;
      win = true;
    } else if (
      number[0] == number[1] ||
      number[0] == number[2] ||
      number[1] == number[2]
    ) {
      money *= 3;
      win = true;
    }
    if (win) {
      let betsEmbed1 = new MessageEmbed()
        .setDescription(
          `${betItems[number[0]]} | ${betItems[number[1]]} | ${
            betItems[number[2]]
          }\n\nYou won ${money} coins`
        )
        .setColor("GREEN");
      message.channel.send(betsEmbed1);
      db.add(`money_${user.id}`, money);
    } else {
      let betsEmbed = new MessageEmbed()
        .setDescription(
          `${betItems[number[0]]} | ${betItems[number[1]]} | ${
            betItems[number[2]]
          }\n\nYou lost ${money} coins`
        )
        .setColor("GREEN");
      message.channel.send(betsEmbed);
      db.subtract(`money_${user.id}`, money);
    }
  },
};
