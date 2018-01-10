const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let ch = message.mentions.channels.first();
  if (args[0]) {
  if (!ch) ch = message.guild.channels.find("name", args[0]);
  }
  if (!ch) ch = message.channel;
  let topic = ch.topic;
  if (!topic) topic = "No topic set.";

  const embed = new Discord.RichEmbed()
    .setTitle(ch.name)
    .setColor(4447003)
    .setThumbnail(message.guild.iconURL)
    .addField("Channel ID", ch.id)
    .addField("Channel Topic", topic)
    .addField("Users", ch.members.size)
    .setFooter("Powered by Hanekawa.Bot™");
  message.channel.send({embed});
}

module.exports.help = {
    name: "channels"
}
