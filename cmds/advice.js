const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
            const embed = new Discord.RichEmbed()
            .setColor(embedcolor)
            .setDescription("Random Advices")
            .addField("Advice", `${JSON.parse(body).slip.advice}`)
            .setFooter("Powered by Uzumaki-Clan")
            message.channel.send({embed: embed});
        } else {
          message.channel.send(`**Advice:**\n\n I couldn't think of any advice...`).then(m => m.delete(25000))
        }
      });
}

module.exports.help = {
    name: "advice"
}
