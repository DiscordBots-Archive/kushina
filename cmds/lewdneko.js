const Discord = require("discord.js");
const { get } = require(`snekfetch`)
module.exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(`Must use in a NSFW channel`)
		get(`http://nekos.life/api/lewd/neko`).then(data => {
			message.channel.send({ files: [data.body.neko] })
		})
		return true
}


module.exports.help = {
    name: "lewd-neko"
}
