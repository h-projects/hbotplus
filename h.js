const Discord = require('discord.js');
const client = new Discord.Client();
const enmap = require("enmap");
const fs = require("fs");
client.disc = require("discord.js");
client.confiq = require("./confiq.json");

client.on('ready', () => {
	client.user.setPresence({
		game: {
			name: 'h',
			type: "PLAYING"
		}
	});
	console.log(`Logged in as ${client.user.tag}!`);
});

fs.readdir("./actions/", (err, files) => {
	console.log("Loading actions...");
	if (err) return console.error(err);
	files.forEach(file => {
    if(file.endsWith(".js")){
    const event = require(`./actions/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client))
    };
	});
	console.log("Loaded actions!");
});

client.cmds = new enmap();
fs.readdir("./commands/", (err, files) => {
	console.log("Loading commands...");
	if (err) return console.eror(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		let props = require(`./commands/${file}`);
		let eventName = file.split(".")[0];
		let commandName = file.split(".")[0];
		client.cmds.set(commandName, props);
	});
	console.log("Loaded commands!");
});


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
	response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
	http.get(`http://hbotplus.juangenial452.repl.co/`);
}, 280000);

client.login(process.env.TOKEN);