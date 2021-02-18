exports.run = (client, message, args) => {
	if (args.join(" ")) return;
	var fs = require('fs');
  
	message.channel.send({
		embed: {
			color: 0xff1d00,
			title: "h",
		footer: {
				text: `hBot - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: 'https://i.imgur.com/chJ9A5N.png'
			}
		}
	})
}
