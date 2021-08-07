module.exports = async (client, oldMsg, newMsg) => {
  if (newMsg.partial) {
    await newMsg.fetch();
  }

  if (CheckHWords() === true){
    newMsg.channel.send({
      embeds: [{
        color: parseInt(client.confiq.embedColor),
        title: "Not a valid hword! Your word has to start with h, only have a-z characters, and it must be unique.",
        footer: {
          text: `hbot+ - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
          icon_url: client.confiq.pfpurl
        }
      }]
    }).then(mseg => {
      setTimeout(() => mseg.delete(), 4000);
    })
    newMsg.delete(); 
    return;
  }
  
  CheckHPolitics();
  
  function CheckHWords()
  {
    if (newMsg.channel.id == "673294129031151677") {
      if (newMsg.content.startsWith("H") || newMsg.content.startsWith("h")) {
        if (/^[a-zA-Z]+$/i.test(newMsg.content)) {
          var fs = require('fs');
          var hwtxt = require(`../h-words.json`)
          if (hwtxt.includes(newMsg.content.toUpperCase())) {
            return true;
          }
          else {
            hwtxt[hwtxt.length] = newMsg.content.toUpperCase();
            fs.writeFile('./h-words.json', JSON.stringify(hwtxt, null, 2), (err) => { if (err) throw err; });
          }
        } else { 
          return true;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  function CheckHPolitics(){
    if(newMsg.channel.id == "809152384936443904" && newMsg.content != "h is better than g"){
      newMsg.delete();
    }
  }
}