const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    message.channel.send(args.join(' ').replace(/[a-z]/gi, ':regional_indicator_$&:'))
}

module.exports.help = {
    name: "emotify"
}
