const Discord = require("discord.js");
const cooldown = new Set();
module.exports.run = async (client, message, args) => {
	let guild = message.guild;
  	if (cooldown.has(message.author.id && message.guild.id))
    	return message.reply(`This command have a cooldown of 5 **Minutes**`);
  	cooldown.add(message.author.id && message.guild.id);
  	setTimeout(() => {
    	cooldown.delete(message.author.id && message.guild.id);
  	}, 300000);

const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} Info Below`, client.user.displayAvatarURL)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(3118751)
    .addField("npm", `${process.version}`, true)
    .addField("Bot Owner", "Lisanna#1790", true)
    .addField("Users", `${client.users.size}`, true)
    .addField("Click the emoji", `[🤖](https://discordapp.com/oauth2/authorize?client_id=400660172961349643&scope=bot&permissions=2146958591)`, true)
    .addField("Channels Overall", client.channels.size, true)
    .addField("Guilds Overall", client.guilds.size, true);
  message.channel.send({embed: embed});

}
module.exports.help = {
    name: "botinfo"
}
