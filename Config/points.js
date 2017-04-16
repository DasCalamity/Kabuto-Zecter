const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
let points = JSON.parse(fs.readFileSync('./config/points.json', 'utf8'));

exports.run = (zecter, message, args) => {

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    userData.level = curLevel;
    message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
  }

  if (message.content.startsWith(config.prefix + "level")) {
    if (message.mentions.users.size) {
    let mention = message.mentions.users.first();
    let user = points[mention.id];
    user.points++;
    return message.channel.send(`${mention.username} is currently level ${user.level}, with ${user.points} points.`);
  } else {
     return message.channel.send(`users currently level ${userData.level}, with ${userData.points} points.`);
   }
  }

  fs.writeFile('./config/points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
}
