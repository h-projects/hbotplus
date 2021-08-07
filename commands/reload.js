exports.help = "Reload hbot+";
exports.usage = "";
exports.category = 1;
const Enmap = require("enmap");
const fs = require("fs");
exports.run = (client, msg, args) => {
  if(client.confiq.authorised.includes(msg.author.id))
  {
    client.confiq = require("../confiq.json");

    client.commands = new Enmap();
  
    fs.readdir("./commands/", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
        if (!file.endsWith(".js")) return;
        delete require.cache[require.resolve(`./${file}`)];
        let props = require(`./${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to reload command ${commandName}`);
        client.commands.set(commandName, props);
      });
    });
    
    return({embeds: [{
          color: parseInt(client.confiq.embedColor),
          title: `hbot+ has been reloaded!`,
          footer: {
                    text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.ceil(Math.random() * client.confiq.footers.length)]}`, 
                    icon_url : client.confiq.pfpurl
          }
    }]});
  }
  else
  {
    return({embed:{
          color: parseInt(client.confiq.embedColor),
          title: `Sorry, you aren't authorised to use this command.`,
          footer: {
                    text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.ceil(Math.random() * client.confiq.footers.length)]}`, 
                    icon_url : client.confiq.pfpurl
          }
    }});
  }
};