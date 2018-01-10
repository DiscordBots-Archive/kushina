const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    message.channel.send(`<http://lmgtfy.com/?q=${args.join(`+`)}>`)
		return true
}

module.exports.help = {
    name: "lmgtfy"
}
