exports.help = "Shows you your h percentaqe based on your username and your nickname";
exports.usage = "[member (optional)]";
exports.category = 0;
exports.run = (client, msg, args) => {
	// if (args.join(" ")) return;

  let hquantity = 0;
  let memb = msg.member;
  if(args[0])
  {
    if(args[0].startsWith("<"))
    {
      memb = getUserFromMention(args[0]);
    }
    else if (client.users.cache.get(args[0]))
    {
      memb = client.users.cache.get(args[0]);
    }
  }
  let membg = msg.channel.guild.members.cache.find(r => r.id === memb.id);
  let userstr = membg.user.username + (membg.displayName ? membg.displayName : "");
  for(i = 0; i != userstr.length; i++)
  {
    if(userstr.charAt(i).toLowerCase() == "h")
    {
      hquantity++;
    }
  }
  let hpercent = 100 / (userstr.length / hquantity);
	return({
      embeds: [{
			color: parseInt(client.confiq.embedColor),
			title: membg.user.username + "'s h percentage is " + hpercent.toFixed(2) + "%",
		footer: {
				text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: client.confiq.pfpurl
			}
		}]
	})


  function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
      mention = mention.slice(2, -1);

      if (mention.startsWith('!')) {
        mention = mention.slice(1);
      }

      return client.users.cache.get(mention);
    }
  }

}
