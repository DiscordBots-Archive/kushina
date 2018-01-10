const Discord = require("discord.js");
const { get } = require(`snekfetch`)
module.exports.run = async (client, message, args) => {
    get(`http://nekos.life/api/neko`).then(data => {
			message.channel.send({ files: [data.body.neko] })
		})
		return true
}


module.exports.help = {
    name: "neko"
}
