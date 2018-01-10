const Discord = require("discord.js");
var request = require('request');
module.exports.run = async (client, message, args, level) => {
    request('https://yesno.wtf/api/', function(err, resp, body) {
        let data = JSON.parse(body)
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        message.channel.sendEmbed(new Discord.RichEmbed()
            .setImage(data.image)
            .setColor(embedcolor)
            .setFooter("Powered by Hanekawa.Bot™")
        );
    })
}

module.exports.help = {
    name: "yesorno"
}
