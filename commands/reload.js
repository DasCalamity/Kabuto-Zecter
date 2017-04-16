const Discord = require("discord.js");
const zecter = new Discord.Client();

exports.run = (zecter, message, args) => {
  const term = require( 'terminal-kit' ).terminal ;

  if (!args || args.length < 1) return message.channel.send(`Must provide a command name to reload.`);
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);

let progressBar , progress = 0 ;

  function doProgress()
  {
    progress += Math.random() / 10 ;
    progressBar.update( progress ) ;

    if ( progress >= 1 )
    {
    console.log(`The command ${args[0]} has been reloaded`)
    }
    else
    {
      setTimeout( doProgress , 100 + Math.random() * 400 ) ;
    }
  }


  progressBar = term.progressBar({
    width: 80 ,
    title: 'Reloading Command '+args[0]+':' ,
    eta: true ,
    percent: true
  });
  doProgress();
};
