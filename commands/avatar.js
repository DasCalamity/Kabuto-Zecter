const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {
  if (message.mentions.users.size) {
    return message.reply(message.mentions.users.first().avatarURL);
  } else {
    return message.reply(message.author.avatarURL);
  }
}
