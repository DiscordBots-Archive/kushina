const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let sprite = message.content.toLowerCase().split(' ').slice(1).join(" ");
  if (!sprite) return message.channel.send("You need to write a pokemon name!! meow~");
  message.channel.send({files: [`http://www.pokestadium.com/sprites/xy/${sprite.replace(/ /g,'-')}.gif`]});
}

module.exports.help = {
    name: "pokemon"
}
