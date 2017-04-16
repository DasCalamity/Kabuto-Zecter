const Discord = require("discord.js");
const zecter = new Discord.Client();
const colors = require('colors');

exports.run = (zecter, message, args) => {

let sRoles = "";
let rolesArray = message.member.roles.array()
for(let i = 0; i < rolesArray.length; i++) {
	sRoles +=" [__"+ rolesArray[i].name +"__] ";
}

const profile = new Discord.RichEmbed()
	.setAuthor('zecter', zecter.user.avatarURL)
	.setColor(0xFF0000)
	.setFooter('zecter.info', zecter.user.avatarURL)
	.setThumbnail(message.author.avatarURL)
	.addField('Username', message.author.username)
	.addField('UserID', message.author.id)
	.addField('Join Date', message.member.joinedAt)
	.addField('Roles', sRoles)
	.addField('Nickname', message.member.nickname)
  .addField('Playing', message.author.presence.game ? message.author.presence.game.name : 'N/A');

if (message.mentions.users.size < 1) return message.channel.sendEmbed(profile);

let user = message.mentions.users.first();
let member = message.guild.members.get(user.id);
let mRoles = "";
let rolesArrays = message.guild.members.get(user.id).roles.array()
for(let i = 0; i < rolesArrays.length; i++) {
	mRoles += " [__" + rolesArrays[i].name + "__] ";
}

const profileM = new Discord.RichEmbed()
	.setAuthor('zecter', zecter.user.avatarURL)
	.setColor(0xFF0000)
	.setFooter('zecter.info', zecter.user.avatarURL)
	.setThumbnail(user.avatarURL)
	.addField('Username', user.username)
	.addField('UserID', member.id)
	.addField('Join Date', member.joinedAt)
	.addField('Roles', mRoles)
	.addField('Nickname', member.nickname || 'N/A')
	.addField('Playing', user.presence.game ? user.presence.game.name : 'N/A');
	return message.channel.sendEmbed(profileM);
};
