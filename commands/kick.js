const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {

  if (message.mentions.users.size < 1) return message.channel.send("``Error`` You must include a user to kick!");

    let user = message.mentions.users.first();
    let kickmember = message.guild.members.get(message.mentions.users.first().id);
    let reason = message.content.split(' ').slice(2).join(' ');

    if (!kickmember) return message.channel.send("``Error`` User is not valid");

      if (!message.guild.member(zecter.user).hasPermission("KICK_MEMBERS")) return message.channel.send("``Error`` Permissions invalid");

      const kick = new Discord.RichEmbed()
        .setAuthor(""+message.guild.name+" | "+message.guild.id+"", message.guild.iconURL)
        .setColor(0xFF0000)
        .setFooter('zecter.log', zecter.user.avatarURL)
        .setThumbnail(user.avatarURL)
        .setTimestamp()
        .setDescription('**Username:** '+user.username+'#'+user.discriminator+'\n**UserID:** '+user.id+'\n**Action:** Was kicked\n**Kicked By:** '+message.author.username+'\n**Reason:**'+(reason || ' N/A'));

      if (message.member.hasPermission("KICK_MEMBERS")) kickmember.kick().then(member => {
        if (message.guild.id == "278561382813794304") {
          message.delete();
          console.log(""+message.author.username+" kicked "+user.username+"");
          zecter.channels.get("280946514665275393").sendEmbed(kick).catch(console.error)
          zecter.channels.get("295711113327280131").sendEmbed(kick).catch(console.error)
          message.channel.send(""+kickmember+" was kicked <:taiga:287379247356444683>").then(message => message.delete(5000))
        } else {
          message.delete();
          console.log(""+message.author.username+" kicked "+user.username+"");
          zecter.channels.get("295711113327280131").sendEmbed(kick).catch(console.error)
          message.channel.send(""+kickmember+" was kicked :thumbsup:").then(message => message.delete(5000))
        }
      })
    }
