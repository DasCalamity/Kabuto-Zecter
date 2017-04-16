const colors = require('colors');
const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {

zecter.generateInvite(["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "READ_MESSAGES", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE",  "EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS"])
	.then(link => {
		message.channel.send(`Generated bot invite link: ${link}`)
		console.log(`Generated bot invite link: ${link}`);
	});
}
