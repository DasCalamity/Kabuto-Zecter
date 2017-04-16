const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {

  let docs = message.content.split(' ').slice(1).join(' ');

  if (docs == 0) return message.channel.send("You must include a doc to open!");

  if (docs == 'invite') return message.channel.send('https://discord.gg/MePmCzk');

  return message.channel.send("No entries found in the Docs!");
}
