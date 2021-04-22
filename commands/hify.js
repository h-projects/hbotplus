exports.help = "H-ifies your text.";
exports.usage = "[text]";
exports.category = 0;
exports.run = (client, msg, args) => {
  function isAcceptableLetter(c) {
    return ['a', 'e', 'i', 'o', 'u', ' ', '.', ',', ';', ':', '!', '?'].indexOf(c.toLowerCase()) !== -1
  }

	let phrase = msg.content.replace("h+hify ", "");
	let hifiedPhrase = "";
	for (let h = 0; h != phrase.length; h++) {
		let letter = phrase.charAt(h);
		if (isAcceptableLetter(letter)) {
			hifiedPhrase = hifiedPhrase + letter;
		}
		else {
			if (letter == letter.toUpperCase()) {
				hifiedPhrase = hifiedPhrase + "H";
			}
			else {
				hifiedPhrase = hifiedPhrase + "h";
			}
		}
	}
	msg.channel.send({
		embed: {
			color: parseInt(client.confiq.embedColor),
      title: "Here's your converted text:",
			description: hifiedPhrase,
			footer: {
				text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: client.confiq.pfpurl
			}
		}
	})
}