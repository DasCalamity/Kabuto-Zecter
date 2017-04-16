const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {

  if (message.mentions.users.size < 1) return message.channel.send("``Error`` You must include a user to ban!");

    let banmember = message.guild.members.get(message.mentions.users.first().id);
    let user = message.mentions.users.first();
    let reason = message.content.split(' ').slice(2).join(' ');

    if (!banmember) return message.channel.send("``Error`` User is not valid");

    if (!message.guild.member(zecter.user).hasPermission("BAN_MEMBERS")) return message.channel.send("``Error`` Permissions invalid");

    const ban = new Discord.RichEmbed()
      .setAuthor(""+message.guild.name+" | "+message.guild.id+"", message.guild.iconURL)
      .setColor(0xFF0000)
      .setFooter('zecter.log', zecter.user.avatarURL)
      .setThumbnail(user.avatarURL)
      .setTimestamp()
      .setDescription('**Username:** '+user.username+'#'+user.discriminator+'\n**UserID:** '+user.id+'\n**Action:** Was banned\n**banned By:** '+message.author.username+'\n**Reason:**'+(reason || ' N/A'));

    if (message.member.hasPermission("BAN_MEMBERS")) banmember.ban().then(member => {
      if(message.guild.id === "278561382813794304") {
        message.delete();
        console.log(""+message.author.username+" banned "+user.username+"");
        zecter.channels.get("280946514665275393").sendEmbed(ban).catch(console.error)
        message.channel.send(""+banmember+" was banned <:taiga:287379247356444683>").then(message => message.delete(5000))
      } else {
        message.delete();
        console.log(""+message.author.username+" banned "+user.username+"");
        zecter.channels.get("295711113327280131").sendEmbed(ban).catch(console.error)
        message.channel.send(""+banmember+" was banned :thumbsup:").then(message => message.delete(5000))
      }
    })
  }
