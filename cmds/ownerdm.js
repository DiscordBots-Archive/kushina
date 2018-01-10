const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
let sigh = message.content.split(" ").slice(1);
let psymsg = sigh.join(" ");
if (!psymsg) return message.reply("Please specify what I should report to my owner?");
message.channel.send(`${message.author.username} I send your message to my owner`);
var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const embed = new Discord.RichEmbed()
        .setDescription(`${message.author.tag}'s report`)
        .addField("Server", `${message.guild.name}`)
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Message", psymsg)
        .setColor(embedcolor)
        .setFooter("Powered by Uzumaki-Clan");
client.users.get("366677235597574155").send({embed: embed});
}

module.exports.help = {
    name: "ownerdm"
}
