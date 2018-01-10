const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    message.channel.send("", {embed: new Discord.RichEmbed()
        .setTitle("My coding engines.")
        .setThumbnail(client.user.avatarURL)
        .addField("Language:", `Node.JS ${process.version}`)
        .addField("Code editor:", "Visual Studio Code")
        .addField("Library:", `Discord.js`)
        .setFooter("Powered by Uzumaki-Clan")
        .setColor(embedcolor)});
        
}

module.exports.help = {
    name: "coding"
}
