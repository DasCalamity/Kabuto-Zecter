const colors = require('colors');
const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {

if(message.guild.id === "278561382813794304") {
	const info = new Discord.RichEmbed()
	.setColor(0xFF0000)
	.setFooter('zecter', zecter.user.avatarURL)
	.setThumbnail(message.guild.iconURL)
	.addField('Server', message.guild.name)
	.addField('ServerID', message.guild.id)
	.addField('Server Owner', message.guild.owner)
	.addField('Server Member Count', message.guild.memberCount)
	.addField('Sentai World!!!', '- We are a group of friends who love to hang out and talk about power rangers and Kamen Rider!')
	.addField('Rules_and_info', '- Please read the <#283034581559410689>! This is really important! Otherwise you miss the fun.')
	.addField('!help', '- Type this in the <#280933794301607937> chat! This will give you a list of thingd you can do with me!');
	return message.channel.sendEmbed(info);
} else {
	const infoM = new Discord.RichEmbed()
	.setColor(0xFF0000)
	.setFooter('zecter', zecter.user.avatarURL)
	.setThumbnail(message.guild.iconURL)
	.addField('Server', message.guild.name)
	.addField('ServerID', message.guild.id)
	.addField('Server Owner', message.guild.owner)
	.addField('Server Member Count', message.guild.memberCount)
	.addField('Rules', '- Please read the Rules! This is really important! Otherwise you miss the fun.')
	.addField('!help', '- Type this in chat! This will give you a list of things you can do!');
	return message.channel.sendEmbed(infoM);
 }
}
