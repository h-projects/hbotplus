exports.help = "Qives you a random word from #h-words";
exports.usage = "";
exports.category = 0;
exports.run = (client, msg, args) => {
	if (args.join(" ")) return;
	var fs = require('fs');

	client.db.get("hcommunitywords").then(hwtxt => {
    let rand = Math.floor(Math.random() * hwtxt.length);

    msg.channel.send({
      embed: {
        color: parseInt(client.confiq.embedColor),
        title: hwtxt[rand].toLowerCase(),
      footer: {
          text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
          icon_url: client.confiq.pfpurl
        }
      }
    })
  })
}
