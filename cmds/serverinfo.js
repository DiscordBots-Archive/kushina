const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
            .setDescription(`${message.guild.name}`)
            .setColor("#D33257")
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.guild.name, message.guild.iconURL)
            .addField("ID", `${message.guild.id}`, true)
            .addField("Name", `${message.guild.name}`, true)
            .addField("Server Owner", message.guild.owner.user.tag, true)
            .addField("Region", `${message.guild.region}`, true)
			      .addField("Members", `${message.guild.memberCount}`, true)
			      .addField("Roles", `${message.guild.roles.filter(roles => roles).size}`, true)
			      .addField("Verification Level", `${message.guild.verificationLevel}`, true)
            .addField("Voice Channels", `${message.guild.channels.filter(channel => channel.type === 'voice').size}`, true)
            .addField("Text Channels", `${message.guild.channels.filter(channel => channel.type === 'text').size}`, true)
            .addField("Afk Channel", `${message.guild.afkChannel}`, true);
            message.channel.send({embed: embed});
    
}

module.exports.help = {
	name: "serverinfo"
}
