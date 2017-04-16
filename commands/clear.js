const colors = require('colors');
const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {

let user = message.mentions.users.first();
let params = message.content.split(' ').slice(1).join(' ');
let messagecount = parseInt(params) + 1;
let messagecountdisplay = parseInt(params);
let paramss = message.content.split(' ').slice(2).join(' ');

const clear = new Discord.RichEmbed()
  .setAuthor(""+message.guild.name+" | "+message.guild.id+"", message.guild.iconURL)
  .setColor(0xFF0000)
  .setFooter('zecter.log', zecter.user.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setDescription("**Username:** "+message.author.username+"#"+message.author.discriminator+"\n**UserID:** "+message.author.id+"\n**Action:** bulkDelete\n**Channel:** #"+message.channel.name+"\n**Messagecount:** "+messagecountdisplay+"");

if (message.mentions.users.size) {
  message.channel.fetchMessages({
    limit: 100
  })
  .then(messages => {
    let msg_array = messages.array();
    msg_array = msg_array.filter(m => m.author.id == user.id);
    message.delete();
    message.channel.bulkDelete(msg_array) + 1;
    message.channel.send("Deleted messages from "+user+"").then(message => message.delete(5000))
  });
  } else {
    message.channel.bulkDelete(messagecount);
    message.delete();
    console.log(""+message.author.username+" deleted "+messagecountdisplay+" messages");
    message.channel.send("Deleted "+messagecountdisplay+" messages!!!").then(message => message.delete(5000))
    zecter.channels.get("280946514665275393").sendEmbed(clear).catch(console.error)
    zecter.channels.get("295711113327280131").sendEmbed(clear).catch(console.error)
  }
}
