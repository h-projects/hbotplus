exports.help = "Shows a list of commands or the requested command usaqe";
exports.usage = "[command]";
exports.category = 0;
exports.run = (client, msg, args) => {
	if(args.length == 0 || client.commands.get(args[0]) == null){
    let allcmds = "";
    client.confiq.helpcats.forEach((value, index, map) => {
      if(index != 1 || client.confiq.authorised.includes(msg.author.id)){
      let catcmds = "";
      allcmds = allcmds + `***${value.name} : ${value.description}***\n`;
      client.commands.forEach((cvalue, ckey, cmap) => {
        if(cvalue.category == index)
        {
           catcmds = catcmds + `${client.confiq.prefix}${ckey}${cvalue.usage == "" ? "" : ` ${cvalue.usage}`} : ${cvalue.help}\n`
        }
      });
      allcmds = `${allcmds}${catcmds}\n`;
    }
    })
    msg.channel.send(`\`\`\`fix\nhbot+ help\n----------\n\n${allcmds}\`\`\``)
  }
  else
  {
    let cmd = client.commands.get(args[0]);
      msg.channel.send({embed:{
        color: parseInt(client.confiq.embedColor),
        title: `${client.confiq.prefix}${args[0]} Help`,
        fields: [
		    {
			    name: 'Command usage:',
			    value: `\`${client.confiq.prefix}${args[0]} ${cmd.usage}\``
		    }],
        footer: {
                  text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`, 
                  icon_url : client.confiq.pfpurl
        }
      }});
  }
}