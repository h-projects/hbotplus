exports.help = "Run a piece of code";
exports.usage = "[code]";
exports.category = 1;
exports.run = (client, msg, args) => {
  if (!client.confiq.authorised.includes(msg.author.id)) return;
  console.log("test")
  eval(msg.content.replace(`${client.confiq.prefix}eval`,""))
  msg.delete();
}
