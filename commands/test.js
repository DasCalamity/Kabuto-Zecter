const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {
  let reaction = "<:strike:287379247406776321>";
  message.reaction.message.channel.sendMessage(`The emoji used is ${reaction.emoji}`);
}
