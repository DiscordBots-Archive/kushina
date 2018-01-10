const Discord = require("discord.js");
var request = require('superagent')

module.exports.run = async (client, message, args, level) => {
    request.get('http://api.yomomma.info/')
    .end((err, res) => {
      if (!err && res.status === 200) {
        try {
          JSON.parse(res.text)
        } catch (e) {
          message.channel.sendMessage('The API didn\'t respond...')
          return
        }
        var joke = JSON.parse(res.text)
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const embed = new Discord.RichEmbed()
        .setThumbnail(client.user.displayAvatarURL)
        .setColor(embedcolor)
        .setDescription("Yomama jokes!!")
        .addField("Joke:", joke.joke)
        .setFooter("Powered by Hanekawa.Bot™");
        message.channel.send({embed: embed});
      } else {
        Logger.error(`Got an error: ${err}, status code: ${res.status}`)
      }
    });
}

module.exports.help = {
    name: "yomama"
}
