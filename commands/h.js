exports.help = "h";
exports.usage = "";
exports.category = 0;
exports.run = (client, msg, args) => {
	if (args.join(" ")) return;
	var fs = require('fs');
  
	return({
      embeds: [{
			color: parseInt(client.confiq.embedColor),
			title: "h",
      image: {
		    url: 'https://cdn.discordapp.com/attachments/765067627084382228/834516329670639636/h.gif',
	    },
		footer: {
				text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: client.confiq.pfpurl
			}
		}]
	})
}
