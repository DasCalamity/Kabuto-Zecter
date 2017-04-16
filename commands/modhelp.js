const Discord = require("discord.js");
const zecter = new Discord.Client();
const colors = require('colors');

exports.run = (zecter, message, args) => {

const modhelp = new Discord.RichEmbed()
	.setColor(0xFF0000)
	.setFooter('zecter.help', zecter.user.avatarURL)
	.setThumbnail(zecter.user.avatarURL)
	.addField('***!kick @mention***', '- This will kick the user you want!')
	.addField('***!ban @mention***', '- This bans the member you want! This option can only be used by the top class mods!')
	.addField('***!mute @mention + reason***', '- This mutes a member you want! Make sure you add a reason or Calamity will ask you why you muted them!')
	.addField('***!unmute @mention***', '- This will unmute the member you want!')
	.addField('***!warn @mention + reason***', '- This will warn the user! Make sure to include a reason!')
	.addField('***!clear + ammount***', '- This will delete the amount of messages you want!');

if(!message.member.hasPermissions(["KICK_MEMBERS" || "BAN_MEMBERS" || "ADMINISTRATOR" || "MANAGE_CHANNELS" || "MANAGE_GUILD" || "MANAGE_MESSAGES" || "MUTE_MEMBERS" || "DEAFEN_MEMBERS" || "MANAGE_NICKNAMES" || "MANAGE_ROLES_OR_PERMISSIONS" || "MANAGE_WEBHOOKS" || "MANAGE_EMOJIS"])) {
	return;
} else {
	return message.channel.sendEmbed(modhelp);
}
}
