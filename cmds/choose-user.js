const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    message.channel.send(`Congratulation ${message.guild.members.random().displayName}\nYou are really lucky! 🎉`).then(m=>m.react('🎉'));
}

module.exports.help = {
    name: "choose-user"
}
