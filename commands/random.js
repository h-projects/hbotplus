exports.run = (client, message, args) => {
	if (args.join(" ")) return;
	var fs = require('fs');

	let data = fs.readFileSync('/home/runner/hbotplus/actions/h-words.txt', 'utf8');
	let rand = Math.floor(Math.random() * data.split("\n").length);
	message.channel.send({
		embed: {
			color: 0xff1d00,
			title: data.split("\n")[rand],
		footer: {
				text: `hBot - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: 'https://i.imgur.com/chJ9A5N.png'
			}
		}
	})
}
