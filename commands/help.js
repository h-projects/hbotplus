exports.run = (client, message, args) => {
	if (args.join(" ")) return; 
	message.channel.send({ embed: {
		color: 0xff1d00,
		title: "Help",
		description: "Commands the bot has!",
		fields: [
      {
				name: `${client.confiq.prefix}h`,
				value: `h`
			},
			{
				name: `${client.confiq.prefix}random`,
				value: `Return a random word that starts with h.`
			},
      {
				name: `${client.confiq.prefix}communityrandom`,
				value: `Return a random word from <#673294129031151677>.`
			},
			{
				name: `${client.confiq.prefix}hify (text)`,
				value: `H binary but not really.`
			},
      {
				name: `${client.confiq.prefix}percent (user)`,
				value: `How h are you?`
			},
      {
				name: `${client.confiq.prefix}inary encode/decode (text)`,
				value: `Encode/decode text to Inary. Example: \`h+inary encode h is epic\``
			}
		],
		footer: {
			text: `hBot - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
			icon_url: 'https://i.imgur.com/chJ9A5N.png'
		}
	}})
}