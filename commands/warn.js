const Discord = require("discord.js");
const zecter = new Discord.Client();
const colors = require('colors');

exports.run = (zecter, message, args) => {

	if(!message.member.hasPermissions(["KICK_MEMBERS" || "BAN_MEMBERS" || "ADMINISTRATOR" || "MANAGE_CHANNELS" || "MANAGE_GUILD" || "MANAGE_MESSAGES" || "MUTE_MEMBERS" || "DEAFEN_MEMBERS" || "MANAGE_NICKNAMES" || "MANAGE_ROLES_OR_PERMISSIONS" || "MANAGE_WEBHOOKS" || "MANAGE_EMOJIS"])) {
		return;
}

let reason = message.content.split(' ').slice(2).join(' ');
let user = message.mentions.users.first();

const warn = new Discord.RichEmbed()
.setAuthor(""+message.guild.name+" | "+message.guild.id+"", message.guild.iconURL)
.setColor(0xFF0000)
.setFooter('zecter.log', zecter.user.avatarURL)
.setThumbnail(user.avatarURL)
.setTimestamp()
.setDescription('**Username:** '+user.username+'#'+user.discriminator+'\n**UserID:** '+user.id+'\n**Action:** Was Warned\n**Warned By:** '+message.author.username+'\n**Reason:** ' + (reason || ' N/A'));

if (message.mentions.users.size < 1) return;

if (reason.length < 1) return;

	message.delete();
	zecter.users.get(user.id).sendMessage("You have been warned in the "+message.guild.name+" server! This is because you were "+reason+"! Please do not do this again! You will be punished next time!");
	console.log(""+message.author.username+" warned "+user+"");
	message.channel.send("Warned "+user+"").then(message => message.delete(5000))
	zecter.channels.get("280946514665275393").sendEmbed(warn).catch(console.error)
}
