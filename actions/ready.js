module.exports = (client) => {
  client.user.setActivity(`${client.confiq.prefix}help`, { type: "PLAYING"})
  console.log(`Logged in as ${client.user.tag}!`);
};