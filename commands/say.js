const Discord = require("discord.js");
const zecter = new Discord.Client();

const colors = require('colors');

exports.run = (zecter, message, args) => {
let modrole = message.guild.roles.find("name", "Zecter Members");

if (!message.member.roles.has(modrole.id)) {
	return;
}

	message.channel.send(message.content.split(' ').slice(1).join(' '));
	message.delete();
}
