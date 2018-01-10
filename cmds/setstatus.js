const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	if (message.author.id === '366677235597574155') {
		let status = args.join(' ')
		client.user.setStatus(status).then(message.reply("Here my new status : " + status))
	} else {
        if (!message.author.id === '366677235597574155') {
            message.channel.send("You're not my owner.")
		}
	}
}

module.exports.help = {
	name: "setstatus"
	
}