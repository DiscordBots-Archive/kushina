const Discord = require("discord.js");
var request = require('request')
var xml2js = require('xml2js')
exports.run = function(client, message, args) {
	request('http://www.fayd.org/api/fact.xml', function (error, response, body) {
                    if (response.statusCode === 200) {
                        xml2js.parseString(body, function (err, result) {
                            try {
                                var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
                                var e = new Discord.RichEmbed()
                                .setColor(embedcolor)
                                .setAuthor(client.user.username)
                                .setDescription(result.facts.fact[0])
                                .setFooter("Powered by Uzumaki-Clan");
                                message.channel.send({ embed: e })
                            } catch (e) {
                                message.channel.send('The API returned an unconventional response.\n' + e)
                            }
                        })
                    }
                });
}
    


module.exports.help = {
	name: "facts"
	
}
