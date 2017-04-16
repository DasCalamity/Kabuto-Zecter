const Discord = require("discord.js")

exports.run = (zecter, message, args) => {

if(message.author.id !== "277883046852689920") return;

const error = console.error;

  const code = args.join(" ");

  try {

  const evaled = eval(code);
    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
      const correct = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setFooter('eval.check', message.author.avatarURL)
        .setDescription(`**Input** :calling:\n\`\`\`js\n${code}\`\`\`\n\nOutput :white_check_mark: \n\`\`\`${clean(evaled)}\`\`\``)
      message.channel.sendEmbed(correct);
  } catch (err) {
    const error = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setFooter('eval.check', message.author.avatarURL)
      .setDescription(`**Input** :calling:\n\`\`\`js\n${code}\`\`\`\n\nOutput :x:\n\`\`\`${clean(err)}\`\`\``)
    message.channel.sendEmbed(error);
  }

  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
}
