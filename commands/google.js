const Discord = require("discord.js");
const zecter = new Discord.Client();
const google = require('google')

exports.run = (zecter, message, args) => {

let arg = message.content.split(' ').slice(1).join(' ');

google(arg, function (err, res){
  if (err) console.error(err)

    let link = res.links[0];

message.channel.send(link.href);
 })
}
