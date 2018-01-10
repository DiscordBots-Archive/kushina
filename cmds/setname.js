const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    {
		let name = args.join(' ')
	   if (message.author.id === '366677235597574155') {
	   client.user.setUsername(name).then(user => message.channel.send(`My new username is ${user.username}`))
	   } else {
        if (!message.author.id === '366677235597574155') {
            message.channel.send("You're not my owner.")
		}
	}
}
}

module.exports.help = {
    name: "setname"
}
