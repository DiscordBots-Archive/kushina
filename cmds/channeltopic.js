const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const channel = message.channel;
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  const embed = new Discord.RichEmbed()
    .setColor(embedcolor)
    .setTitle(`Channel Topic of ${channel.name}`)
    .setDescription(channel.topic)
    .setFooter("Powered by Uzumaki-Clan");
  if (!channel.topic) embed.setDescription("No Topic set.");
  message.channel.send({embed});
}

module.exports.help = {
    name: "channeltopic"
}
