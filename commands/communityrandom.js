exports.run = (client, message, args) => {
	if (args.join(" ")) return;
	var fs = require('fs');

	let data = require("../h-words.json");
	let rand = Math.floor(Math.random() * data.length);
	message.channel.send({
		embed: {
			color: 0xff1d00,
			title: data[rand].toLowerCase(),
		footer: {
				text: `hBot - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: 'https://i.imgur.com/chJ9A5N.png'
			}
		}
	})
}
