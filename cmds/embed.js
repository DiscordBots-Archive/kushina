const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    const embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setThumbnail(message.author.displayAvatarURL)
            .setColor(embedcolor)
            .addField("Your text", args.join(' '), true)
            .setFooter("Powered by Uzumaki-Clan");
            return message.channel.send({embed: embed});
}

module.exports.help = {
    name: "embed"
}
