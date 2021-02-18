exports.run = (client, message, args) => {
	// if (args.join(" ")) return;

  let hquantity = 0;
  let memb = message.member;
  if(args[0])
  {
    if(args[0].startsWith("<"))
    {
      memb = getUserFromMention(args[0]);
    }
    else if (client.users.get(args[0]))
    {
      memb = client.users.get(args[0]);
    }
  }
  let membg = message.channel.guild.members.find(r => r.id === memb.id);
  let userstr = membg.user.username + (membg.displayName ? membg.displayName : "") + (memb.presence.game ? memb.presence.game.state : "");
  console.log(userstr);
  for(i = 0; i != userstr.length; i++)
  {
    if(userstr.charAt(i).toLowerCase() == "h")
    {
      hquantity++;
    }
  }
  let hpercent = 100 / (userstr.length / hquantity);
	message.channel.send({
		embed: {
			color: 0xff1d00,
			title: membg.user.username + "'s h percentage is " + hpercent.toFixed(2) + "%",
		footer: {
				text: `hBot - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: 'https://i.imgur.com/chJ9A5N.png'
			}
		}
	})


  function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
      mention = mention.slice(2, -1);

      if (mention.startsWith('!')) {
        mention = mention.slice(1);
      }

      return client.users.get(mention);
    }
  }

}
