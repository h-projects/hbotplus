module.exports = async (client, oldMessage, newMessage) => {
  if (message.partial) {
    await newMessage.fetch();
  }

  CheckHWords();
  CheckHPolitics();
  
  function CheckHWords()
  {
    if (newMessage.channel.id == "673294129031151677") {
      if (newMessage.content.startsWith("H") || newMessage.content.startsWith("h")) {
        if (/^[a-zA-Z]+$/i.test(newMessage.content)) {
          var fs = require('fs');
          var hwtxt = require(`../h-words.json`)
          if (hwtxt.includes(newMessage.content.toUpperCase())) {
            newMessage.channel.send({
              embed: {
                color: parseInt(client.confiq.embedColor),
                title: "Not a valid hword! Your word has to start with h, only have a-z characters, and it must be unique.",
              footer: {
                  text: `hbot+ - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
                  icon_url: client.confiq.pfpurl
                }
              }
            }).then(msg => {
              msg.delete({ timeout: 4000 })
            })
            newMessage.delete();
          }
          else {
            hwtxt[hwtxt.length] = newMessage.content.toUpperCase();
            fs.writeFile('./h-words.json', JSON.stringify(hwtxt, null, 2), (err) => { if (err) throw err; });
          }
        } else { 
          newMessage.channel.send({
            embed: {
              color: parseInt(client.confiq.embedColor),
              title: "Not a valid hword! Your word has to start with h, only have a-z characters, and it must be unique.",
              footer: {
                text: `hbot+ - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
                icon_url: client.confiq.pfpurl
              }
            }
          }).then(msg => {
            msg.delete({ timeout: 4000 })
          })
          newMessage.delete(); 
        }

      } else {
        newMessage.channel.send({
          embed: {
            color: parseInt(client.confiq.embedColor),
            title: "Not a valid hword! Your word has to start with h, only have a-z characters, and it must be unique.",
            footer: {
              text: `hbot+ - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
              icon_url: client.confiq.pfpurl
            }
          }
        }).then(msg => {
          msg.delete({ timeout: 2000 })
        })
        newMessage.delete();
      }
    }
  }
  function CheckHPolitics(){
    if(newMessage.channel.id == "809152384936443904" && newMessage.content != "h is better than g"){
      newMessage.delete();
    }
  }
}