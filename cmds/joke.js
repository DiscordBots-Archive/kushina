const Discord = require("discord.js");
const snekfetch = require('snekfetch');
var jokes = require('../data/jokes.json');

module.exports.run = async (client, message, args) => {
        var min = 0,
        max = jokes.length - 1;
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const embed = new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setDescription(jokes[Math.floor(Math.random() * (max - min + 1)) + min].body)
        .setTitle("Random Jokes.")
        .setColor(embedcolor)
        .setFooter("Powered by Hanekawa.Bot™");
        message.channel.send({embed: embed});
        
    
}
module.exports.help = {
    name: "joke"
}
