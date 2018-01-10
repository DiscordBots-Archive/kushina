const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (message.author.id === '366677235597574155') {
        let game = args.join(' ')
        client.user.setGame(game).then(message.reply("Here my new playing status : " + game))
      } else {
        if (!message.author.id === '366677235597574155') {
            message.channel.send("You're not my owner.")
        }
    }
}

module.exports.help = {
    name: "setgame"
}
