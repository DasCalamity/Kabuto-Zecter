const Discord = require("discord.js")

exports.run = (zecter, member) => {

let mentions = member.toString();
const guildMemberRemove = new Discord.RichEmbed()
  .setAuthor(""+member.guild.name+" | "+member.guild.id+"", member.guild.iconURL)
  .setColor(0xff0000)
  .setFooter('zecter.log', zecter.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTimestamp()
  .setDescription('**Username:** '+member.displayName+'#'+member.user.discriminator+'\n**UserID:** '+member.id+'\n**Action:** Left server\n**Server:** '+member.guild.name+'');

zecter.channels.get("280946514665275393").sendEmbed(guildMemberRemove);
zecter.channels.get("295711113327280131").sendEmbed(guildMemberRemove);
console.log(""+mentions+" Left the server");
}
