const Discord = require("discord.js");
const urban = require('urban');
module.exports.run = async (client, message, args, levels) => {
    var write = 0;
    var urban = require('urban'),
        word = urban(args.join(' '));
    word.first(function(json) {
        if(json.definition.length < 1) return message.channel.send('Something went wrong...\n errcode: 0');
        if(!json.example) return message.channel.send('Something went wrong...\n errcode: 1');
        if(!json.author) return message.channel.send('Something went wrong...\n errcode: 2');
        if(!json.thumbs_up) return message.channel.send('Something went wrong...\nerr code: 3');
        if(!json.thumbs_down) return message.channel.send('Something went wrong...\nerr code: 4');
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        message.channel.sendEmbed(new Discord.RichEmbed()
            .addField(`Definition of ${json.word}`, `${json.definition}`, true)
            .addField(`Example`, `${json.example}`, true)
            .addField(`Author`, `${json.author}`, true)
            .addField(`Rating`, `:thumbsup: ${json.thumbs_up} :thumbsdown: ${json.thumbs_down}`, true)
            .setColor(embedcolor)
            .setFooter("Powered by Uzumaki-Clan")
        );
    });
}

module.exports.help = {
    name: "urban"
}
