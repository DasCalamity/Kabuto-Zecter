exports.run = (Destwilder) => {

const fs = require("fs");
const Discord = require("discord.js")
const colors = require('colors/safe');
const config = require("./config.json");

const term = require( 'terminal-kit' ).terminal ;

let progressBar;

fs.readdir('./commands/', (err, data) => {
if (err) return console.error(err);

let countDown = data.length;

function start()
{
	if (!data.length) return;

	let task = data.shift() ;

	progressBar.startItem(task);

	setTimeout( done.bind(null, task), 500 + Math.random() * 1200 ) ;
	setTimeout( start , 400 + Math.random() * 400 ) ;
}

function done(task)
{
	progressBar.itemDone(task);
	countDown -- ;
}

progressBar = term.progressBar({
	width: 80 ,
	title: 'Loading commands:' ,
	eta: true ,
	percent: true ,
	items: data.length
});

start();

});

console.log(colors.rainbow("-----------------------------------Chat logs-----------------------------------"));
console.log(colors.random('Destwilder Is Online!!!'));

}
