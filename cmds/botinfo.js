const Discord = require("discord.js");
const cooldown = new Set();
module.exports.run = async (client, message, args) => {
	let guild = message.guild;
  var bpmb = client.ping;
  var bpm = bpmb.toFixed()
  let os = require("os");
  var usageMb = process.memoryUsage().heapUsed / 1024 / 1024;
  var usage = usageMb.toFixed(2);

if (cooldown.has(message.author.id && message.guild.id))
    return message.reply(`This command have a cooldown of 5 **Minutes**`);
  cooldown.add(message.author.id && message.guild.id);
  setTimeout(() => {
    cooldown.delete(message.author.id && message.guild.id);
  }, 300000);

const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} Info Below`, client.user.displayAvatarURL)
    .addField(":heart: BPM", bpm, true)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(3118751)
    .addField("MB usage", `${usage}MB`, true)
    .addField("Discord.js", `${Discord.version}`, true)
    .addField("ShihouinBot", `${package.version}`, true)
    .addField("npm", `${process.version}`, true)
    .addField("Bot Owner", "Lisanna#1790", true)
    .addField("Users", `${client.users.size}`, true)
    .addField("Click the emoji", `[🤖](https://discordapp.com/oauth2/authorize?client_id=400660172961349643&scope=bot&permissions=2146958591)`, true)
    .addField("Channels Overall", client.channels.size, true)
    .addField("Guilds Overall", client.guilds.size, true);
  message.channel.send({
    embed
  }).catch(e => logger.error(e))
};

module.exports.help = {
    name: "botinfo"
}
