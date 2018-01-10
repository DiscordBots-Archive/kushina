const Discord = require("discord.js");
var unirest = require('unirest');
exports.run = function(client, message, args) {
	unirest.get('https://api.chucknorris.io/jokes/random')
            .end(function (result) {
                var joke = result.body
                var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
                var e = new Discord.RichEmbed()
                    .setFooter("Powered by Uzumaki-Clan")
                    .setColor(embedcolor)
                    .setAuthor("Chuck Norris Joke", joke.icon_url, joke.url)
                    .setDescription(joke.value)

                message.channel.send({ embed: e })
            })

}

module.exports.help = {
	name: "chuck"

}
