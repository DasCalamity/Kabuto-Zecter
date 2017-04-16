const Discord = require("discord.js");
const zecter = new Discord.Client();
const chalk = require('chalk');
const fs = require("fs");

const config = require("./config/config.json");
const message = require(`./config/message.js`);
const term = require('terminal-kit').terminal ;

let games = [];

process.on("unhandledRejection", err => {
  console.error(err);
});

zecter.on('ready', () => {
	console.log("ready");
});

zecter.on('ready', function() {
	setGame(0);
  games = ["Servers: "+zecter.guilds.size+"", "Coded by Calamity", "use !help"]
  });

function setGame(index) {
  index %= 3;
  zecter.user.setGame(games[index]);
  index++;
  setTimeout(setGame, 15000, index);
  return;
  }

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      zecter.on(eventName, (...args) => eventFunction.run(zecter, ...args));
    });
  });

zecter.on("message", message => {

  try {
    if (!message.content.startsWith(config.prefix)) return;

		let command = message.content.split(" ")[0];
  	command = command.slice(config.prefix.length);
		let args = message.content.split(" ").slice(1);
		let pointsFile = require(`./config/points.js`);

    	pointsFile.run(zecter, message, args);
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(zecter, message, args);
      } catch (err) {
        let args = message.content.split(" ").slice(1);
        let command = message.content.split(" ")[0];
        command = command.slice(config.prefix.length);
        console.error(err);
      const error = new Discord.RichEmbed()
        .setAuthor(""+message.guild.name+" | "+message.guild.id+"", message.guild.avatarURL)
        .setColor(0xFF0000)
        .setFooter('zecter.error', zecter.user.avatarURL)
        .setThumbnail(zecter.user.avatarURL)
        .setTimestamp()
        .setDescription('**Username:** '+message.author.username+'#'+message.author.discriminator+'\n**UserID:** '+message.author.id+'\n**Action:** Error\n**Command :** `!'+command+' + '+args+'`\n**File:** `'+command+'.js`\n**Error Info:** '+clean(err)+'');
        message.channel.sendEmbed(error);
        zecter.channels.get("295711113327280131").sendEmbed(error);
      }
  });

function clean(text) {
if (typeof(text) === "string")
	return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
else
		return text;
}

zecter.login(config.token);
