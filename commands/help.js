const colors = require('colors');
const Discord = require("discord.js");
const zecter = new Discord.Client();
const prefixs = "!";

exports.run = (zecter, message, args) => {

const help = new Discord.RichEmbed()
	.setColor(0xFF0000)
	.setFooter('zecter.help', zecter.user.avatarURL, true)
	.setThumbnail(zecter.user.avatarURL)
	.addField(prefixs + "avatar", "- This provides the url of your profile picture! If you mentioned someone after the command it will display there avatar", true)
	.addField(prefixs + "info", "- This provides info on the server!", true)
	.addField(prefixs + "profile", "- This provides your info! If you mentioned someone after the command it will display there profile info", true)
	.addField(prefixs + "google + search", "- This provides the url of the result of what you searched!", true)
	.addField(prefixs + "avatar", "- This provides the url of your profile picture! If you mentioned someone after the command it will display there avatar", true)
	.addField(prefixs + "invite", "- This provides the url to invite Kabuto Zecter", true)
	.addField(prefixs + "modhelp", "- This provides the list of commands for mod commands! Note: If you do not have mod roles the bot will not display the list", true);
	return message.channel.sendEmbed(help);
}
