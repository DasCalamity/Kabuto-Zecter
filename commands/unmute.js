const Discord = require("discord.js");
const zecter = new Discord.Client();
const colors = require('colors');

exports.run = (zecter, message, args) => {

if(message.mentions.users.size < 0) return;

let user = message.mentions.users.first();
let muterole = zecter.guilds.get(message.guild.id).roles.find('name', 'Muted')
let modrole = message.guild.roles.find("name", "ModHelpers");

const unmute = new Discord.RichEmbed()
	.setAuthor(""+message.guild.name+" | "+message.guild.id+"", message.guild.iconURL)
	.setColor(0xFF0000)
	.setFooter('zecter.log', zecter.user.avatarURL)
	.setThumbnail(user.avatarURL)
	.setTimestamp()
  .setDescription('**Username:** '+user.username+'#'+user.discriminator+'\n**UserID:** '+user.id+'\n**Action:** Was Unmuted\n**Unmuted By:** '+message.author.username+'');

if (!message.member.roles.has(modrole.id)) {
	return;
}

	message.guild.member(user).removeRole(muterole).then(()=>{
		message.delete();
		console.log(""+user+" was unmuted by "+message.author.username+"");
		message.channel.send(""+user+" was unmuted <:taiga:287379247356444683>").then(message => message.delete(5000))
		zecter.channels.get("280946514665275393").sendEmbed(unmute);
	});
};
