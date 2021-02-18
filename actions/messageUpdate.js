module.exports = async (client, oldMessage, newMessage) => {
  CheckHWords();
  CheckHPolitics();

  function CheckHWords()
  {
    if (newMessage.channel.id == "673294129031151677") {
      if (newMessage.content.startsWith("H") || newMessage.content.startsWith("h")) {
        if (!newMessage.content.startsWith("http") && !newMessage.content.includes(" ")) {
          var fs = require('fs');
          var hwtxt = require(`../h-words.json`)
          if (hwtxt.includes(newMessage.content.toUpperCase())) {
            message.delete();
          }
          else {
            hwtxt[hwtxt.length] = newMessage.content.toUpperCase();
            fs.writeFile('./h-words.json', JSON.stringify(hwtxt, null, 2), (err) => { if (err) throw err; });
          }
        } else { 
          newMessage.delete(); 
          }

      } else {
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