const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    {
        let avatar = args.join(' ')
       if (message.author.id === '366677235597574155') {
       client.user.setAvatar(avatar).then(message.channel.send("Done :3!")).catch(error => message.reply(`I couldn't do this :/ , here the error : ${error}`))
       } else {
        if (!message.author.id === '366677235597574155') {
            message.channel.send("You're not my owner.")
        }
       }
       
    }
    
}

module.exports.help = {
    name: "setavatar"
}