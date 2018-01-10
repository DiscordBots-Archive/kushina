const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	if (message.mentions.users.first()) {
		message.channel.send("The mentioned members name is " + message.mentions.members.first().user.username + ", the mentioned members id is " + message.mentions.members.first().id)
	} else {
		if (!message.mentions.users.first()) {
			message.channel.send(" :x: You need to mention a user")
		}
	}
    
}

module.exports.help = {
    name: "mention"
}
