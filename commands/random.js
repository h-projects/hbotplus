exports.help = "Qives you a random word that starts with h";
exports.usage = "";
exports.category = 0;
exports.run = (client, msg, args) => {
	var fs = require('fs');

	let data = fs.readFileSync('/home/runner/hbotplus/actions/h-words.txt', 'utf8');
	let rand = Math.floor(Math.random() * data.split("\n").length);
	return({
      embeds: [{
			color: parseInt(client.confiq.embedColor),
			title: data.split("\n")[rand],
		footer: {
				text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: client.confiq.pfpurl
			}
		}]
	})
}
