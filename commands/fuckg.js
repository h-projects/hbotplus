exports.help = "Converts all your G into Q.";
exports.usage = "[text]";
exports.category = 0;
exports.run = (client, msg, args) => {
  let result = "Syntax error! You must qive hbot+ text to work with. Example: h+inary encode h";
  let parseInput = msg.content.replace("h+fuckg ", "");
  result = parseInput.replace(/g/g, "q").replace(/G/g, "Q");
	msg.channel.send({
		embed: {
			color: parseInt(client.confiq.embedColor),
      title: "Here's your converted text:",
			description: result,
			footer: {
				text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: client.confiq.pfpurl
			}
		}
	})
}