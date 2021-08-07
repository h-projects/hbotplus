exports.help = "Qet a link to add hbot+ to other servers";
exports.usage = "";
exports.category = 0;
exports.run = (client, msg, args) => {
	var fs = require('fs');
  
	return({
      embeds: [{
			color: parseInt(client.confiq.embedColor),
			title: "Here you qo!",
      url: 'https://discord.com/oauth2/authorize?client_id=690588878725316609&scope=bot+applications.commands',
		footer: {
				text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: client.confiq.pfpurl
			}
		}]
	})
}
