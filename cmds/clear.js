const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (args.length < 1 || Number.isInteger(args[0]) || args[0] < 1 || args[0] > 100) return message.channel.send("You need to write a amount")
    if (!message.guild.me.hasPermission(`MANAGE_MESSAGES`) || !message.member.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(`Missing Permissions "MANAGE_MESSAGES"`)

    message.channel.bulkDelete(args[0], { filterOld: true })
    return true
	}

module.exports.help = {
    name: "clear"
}
