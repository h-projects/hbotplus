module.exports = async (client, message, member) => {
	var array = message.content.split(" "),
		args = array.slice(1);
	const talkedRecently = new Set();

  console.log("hello?")

	// Go aways bots and people who are trying to use commands on dm
	if (message.author.bot || message.channel.type !== "text") return;

  // Check if the message is in hwords and delete any duplicate hword or non-h word
  CheckHWords();
  CheckHPolitics();

	// No prefix no fun
	if (!message.content.startsWith(client.confiq.prefix)) return;


	// Get command and execute it
	if (talkedRecently.has(message.author.id) && !message.member.roles.cache.some(r => r.name === "hbot+ manager")) {
		message.reply({
			embed: {
				color: ff1d00,
				title: "Too Fast",
				description: "Please wait 10 seconds and try aqain."
			}
		});
		message.delete();
		return;
	}
	else {
		let cmd = client.cmds.get(
			array[0].replace(client.confiq.prefix, "").toLowerCase()
		);

		talkedRecently.add(message.author.id);
		setTimeout(() => {
			talkedRecently.delete(message.author.id);
		}, 10000);
    if (!cmd) message.reply("404 Command not found.");

	  cmd.run(client, message, args);
		//return;
	}

  function CheckHWords()
  {
    if (message.channel.id == "673294129031151677") {
      if (message.content.startsWith("H") || message.content.startsWith("h")) {
        if (!message.content.startsWith("http") && !message.content.includes(" ")) {
          var fs = require('fs');
          var hwtxt = require(`../h-words.json`)
          if (hwtxt.includes(message.content.toUpperCase())) {
            message.delete();
          }
          else {
            hwtxt[hwtxt.length] = message.content.toUpperCase();
            fs.writeFile('./h-words.json', JSON.stringify(hwtxt, null, 2), (err) => { if (err) throw err; });
          }
        } else { 
          message.delete(); 
          }

      } else {
        message.delete();
      }
    }
  }
  function CheckHPolitics(){
    if(message.channel.id == "809152384936443904" && message.content != "h is better than g"){
      message.delete();
    }
  }
};

