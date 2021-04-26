module.exports = async (client, msg, member) => {
	var array = msg.content.split(" "),
		args = array.slice(1);
	const talkedRecently = new Set();

	// Go aways bots and people who are trying to use commands on dm
	if (msg.author.bot || msg.channel.type !== "text") return;

  // Check if the msg is in hwords and delete any duplicate hword or non-h word
  if (CheckHWords()) return;
  if (CheckHPolitics()) return;

	// No prefix no fun
	if (!msg.content.startsWith(client.confiq.prefix)) return;

  // If commands are disabled, don't execute unless you're authorised
  if (!client.confiq.authorised.includes(msg.author.id) && client.confiq.commsdisabled){
  	msg.channel.send({
      embed: {
        color: parseInt(client.confiq.embedColor),
        title: "Sorry, commands are currently disabled and only available to the hbot+ admins.",
      footer: {
          text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
          icon_url: client.confiq.pfpurl
        }
      }
	  })
    return;
  }

	// Get command and execute it
	if (talkedRecently.has(msg.author.id) && !msg.member.roles.cache.some(r => r.name === "hbot+ manager")) {
		msg.reply({
			embed: {
				color: ff1d00,
				title: "Too Fast",
				description: "Please wait 10 seconds and try aqain."
			}
		});
		msg.delete();
		return;
	}
	else {
		let cmd = client.commands.get(
			array[0].replace(client.confiq.prefix, "").toLowerCase()
		);

		talkedRecently.add(msg.author.id);
		setTimeout(() => {
			talkedRecently.delete(msg.author.id);
		}, 10000);
    if (!cmd) msg.channel.send({
      embed: {
        color: parseInt(client.confiq.embedColor),
        title: `Whoops! This command does not exist.`,
        description: `Use \`${client.confiq.prefix}help\` to qet a list of commands.`,
        footer: {
            text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
            icon_url: client.confiq.pfpurl
          }
        }
	  })

	  cmd.run(client, msg, args);
	}

  function CheckHWords()
  {
    if (msg.channel.id == "673294129031151677") {
      if (msg.content.startsWith("H") || msg.content.startsWith("h")) {
        if (/^[a-zA-Z]+$/i.test(msg.content)) {
          client.db.get("hcommunitywords").then(hwtxt => {
            if (hwtxt.includes(msg.content.toUpperCase())) {
              msg.channel.send({
                embed: {
                  color: parseInt(client.confiq.embedColor),
                  title: "Not a valid hword! Your word has to start with h, only have a-z characters, and it must be unique.",
                footer: {
                    text: `hbot+ - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
                    icon_url: client.confiq.pfpurl
                  }
                }
              }).then(mseg => {
                mseg.delete({ timeout: 4000 })
              })
              msg.delete();
              return true;
            }
            else {
              hwtxt.push(msg.content.toUpperCase());
              client.db.set("hcommunitywords", hwtxt);
            }
          })
        } else { 
          msg.channel.send({
            embed: {
              color: parseInt(client.confiq.embedColor),
              title: "Not a valid hword! Your word has to start with h, only have a-z characters, and it must be unique.",
            footer: {
                text: `hbot+ - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
                icon_url: client.confiq.pfpurl
              }
            }
          }).then(mseg => {
            mseg.delete({ timeout: 4000 })
          })
          msg.delete(); 
          return true;
        }

      } else {
        msg.channel.send({
          embed: {
            color: parseInt(client.confiq.embedColor),
            title: "Not a valid hword! Your word has to start with h, only have a-z characters, and it must be unique.",
            footer: {
              text: `hbot+ - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
              icon_url: client.confiq.pfpurl
            }
          }
        }).then(mseg => {
          mseg.delete({ timeout: 2000 })
        })
        msg.delete();
        return true;
      }
    }
  }

  function CheckHPolitics(){
    if(msg.channel.id == "809152384936443904" && msg.content != "h is better than g"){
      msg.delete();
      return true;
    }
  }
};

