module.exports = async (client, interaction) => {
  if (!interaction.isCommand()) return;
  
  let cmd = client.commands.get(interaction.commandName);

  interaction.channel = client.channels.cache.get(interaction.channelId);
  //interaction.channel.send = (content) => interaction.reply({ embeds: content.embeds });

  interaction.author = interaction.user;
  interaction.author.tag = interaction.author.username + "#" + interaction.author.discriminator;
  
  let args = [];
  if(interaction.options._subcommand) args.push(interaction.options._subcommand);
  for(let i = 0; i != interaction.options._hoistedOptions.length; i++){
    args.push(interaction.options._hoistedOptions[i].value);
  }

  let cmdResponse = cmd.run(client, interaction, args);
  if(cmdResponse) interaction.reply(cmdResponse);
}