const Discord = require("discord.js");
var unirest = require('unirest');
exports.run = function(client, message, args) {
	unirest.get('http://www.animalplanet.com/xhr.php?action=get_facts&limit=500&page_id=37397&module_id=cfct-module-bdff02c2a38ff3c34ce90ffffce76104')
            .end(function (result) {
                var catfact = JSON.parse(result.body)
				var num = Math.round(Math.random() * catfact.length);
				var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
                var e = new Discord.RichEmbed()
					.setFooter("Powered by animalplanet.com")
					.setColor(embedcolor)
                    .setTitle("Cat Fact #" + num)
                    .setDescription(catfact[num].description)
                    .setFooter("Powered by Uzumaki-Clan");
                message.channel.send({ embed: e });
            });
}

module.exports.help = {
	name: "catfacts"
	
}
