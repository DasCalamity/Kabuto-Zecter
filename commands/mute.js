const Discord = require("discord.js");
const zecter = new Discord.Client();
const colors = require('colors');

exports.run = (zecter, message, args) => {

let reason = message.content.split(' ').slice(2).join(' ');
let user = message.mentions.users.first();
let muterole = zecter.guilds.get(message.guild.id).roles.find('name', 'Muted')
let modrole = message.guild.roles.find("name", "ModHelpers");

if(!message.member.roles.has(modrole.id)) {
	return;
}

const mute = new Discord.RichEmbed()
	.setAuthor(""+message.guild.name+" | "+message.guild.id+"", message.guild.iconURL)
	.setColor(0xFF0000)
	.setFooter('zecter.log', zecter.user.avatarURL)
	.setThumbnail(user.avatarURL)
	.setTimestamp()
	.setDescription('**Username:** '+user.username+'#'+user.discriminator+'\n**UserID:** '+user.id+'\n**Action:** Was Muted\n**Muted By:** '+message.author.username+'\n**Reason:** ' + ( reason || ' N/A'));

message.guild.member(user).addRole(muterole).then(()=>{
	message.delete();
	console.log(""+user+" was muted by "+message.author.username+"");
	zecter.channels.get("280946514665275393").sendEmbed(mute);
	zecter.channels.get("295711113327280131").sendEmbed(mute);
	message.channel.send(""+user+" was Muted <:taiga:287379247356444683>").then(message => message.delete(5000))
	zecter.channels.get("291245264860217345").send(`${user}, you have been muted for ${reason ? reason : "[Not enough infomoration provided]"}`);
 });
};
