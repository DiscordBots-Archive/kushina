const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("List Of Servers")
  .setColor(3447003)
  .setThumbnail(client.user.avatarURL)
  .setDescription(client.guilds.map(g=>g.name).join(", "))
  .setFooter("Powered by Uzumaki-Clan");
if (embed.description.length > 1998) return message.reply("**Discord API Error**\nCan't send large messages.");
message.channel.send({embed});
}

module.exports.help = {
    name: "servers"
}
