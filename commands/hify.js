exports.run = (client, message, args) => {
	//if (args.join(" ")) return;

  function isAcceptableLetter(c) {
    return ['a', 'e', 'i', 'o', 'u', ' ', '.', ',', ';', ':', '!', '?'].indexOf(c.toLowerCase()) !== -1
  }

	let phrase = message.content.replace("h+hify ", "");
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
	message.channel.send({
		embed: {
			color: 0xff1d00,
			title: hifiedPhrase,
			footer: {
				text: `hBot - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: 'https://i.imgur.com/chJ9A5N.png'
			}
		}
	})
}