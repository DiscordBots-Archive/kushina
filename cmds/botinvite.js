const Discord = require("discord.js");
const { MessageEmbed } = require(`discord.js`)
module.exports.run = async (client, message, args) => {
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
            const embed = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL)
            .setThumbnail(client.user.displayAvatarURL)
			.setTitle(`Invite me your server and you will have fun!`)
			.setURL(client.user.bot ? `https://discordapp.com/oauth2/authorize?client_id=400353151817089057&scope=bot&permissions=2146958591` : `http://lmgtfy.com/?q=Didn%27t+you+read+the+damn+text`)
			.setFooter(`Note: I may be a private bot`)
            .setColor(embedcolor)
            message.channel.send({embed: embed});

}

module.exports.help = {
    name: "botinvite"
}
