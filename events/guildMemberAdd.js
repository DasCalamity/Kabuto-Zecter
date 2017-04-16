const Discord = require("discord.js")

exports.run = (zecter, member) => {

let mentions = member.toString();

const guildMemberAdd = new Discord.RichEmbed()
  .setAuthor(""+member.guild.name+" | "+member.guild.id+"", member.guild.iconURL)
  .setColor(0xFF0000)
  .setFooter('zecter.log', zecter.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTimestamp()
  .setDescription('**Username:** '+member.displayName+'#'+member.user.discriminator+'\n**UserID:** '+member.id+'\n**Action:** Joined server\n**Server:** '+member.guild.name+'');

if(member.guild.id === "278561382813794304") {
  member.guild.defaultChannel.sendMessage("Welcome to the Sentai Lovers "+mentions+", please read the <#283034581559410689> and make sure you keep up in <#280958731187912705>! <:taiga:287379247356444683>");
  console.log(""+mentions+" joined the server");
  zecter.channels.get("280946514665275393").sendEmbed(guildMemberAdd);
  zecter.channels.get("295711113327280131").sendEmbed(guildMemberAdd);
} else {
  member.guild.defaultChannel.sendMessage("Welcome to the "+member.guild.name+" "+mentions+"!!!");
  console.log(""+mentions+" joined the server");
  zecter.channels.get("295711113327280131").sendEmbed(guildMemberAdd);
 }
}
