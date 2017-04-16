sconst Discord = require("discord.js");
const zecter = new Discord.Client();
const colors = require('colors');

exports.run = (zecter, message, args) => {

if(message.author.id !== "277883046852689920") return;

	message.reply("`Online`").then(message => message.delete(5000))
	message.delete();
}
