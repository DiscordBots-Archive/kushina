const Discord = require("discord.js");
var imageArray = [
    "https://media.giphy.com/media/T6QsHz4lscVZm/giphy.gif",
    "https://78.media.tumblr.com/719b1f1baeafeaaa146499c2e81f1cf7/tumblr_ol1hlgzc981uprh6zo1_400.gif",
    "https://78.media.tumblr.com/afb089abf4e537424c7df01f47256093/tumblr_o553hjJLgs1ujp8qzo1_500.gifhttps://78.media.tumblr.com/afb089abf4e537424c7df01f47256093/tumblr_o553hjJLgs1ujp8qzo1_500.gif",
    "https://media1.tenor.com/images/2e915cd96500daf6349a2f4a75a4e8de/tenor.gif",
    "https://thumbs.gfycat.com/HeartySpanishDuck-size_restricted.gif",
    "https://78.media.tumblr.com/fc11dd5c4d3db17615a7e9533de202ed/tumblr_mgo9jaywjv1r5zfj8o1_500.gif",
    "https://i.pinimg.com/originals/c8/3e/98/c83e988a7178349ef8e7b5fbf76989f6.gif",
    "https://m.popkey.co/a3e939/JaGv9.gif",
    "https://media.giphy.com/media/uXsPodwDXnitq/giphy.gif",
    "https://media1.tenor.com/images/52560e044056cd971892506ce85eb987/tenor.gif",
    "https://media.giphy.com/media/fvcrSYkOmtP8c/giphy.gif",
    "https://thumbs.gfycat.com/GoodnaturedMemorableKomododragon-max-1mb.gif",
    "https://media1.tenor.com/images/40383ad4bf828866d7bd67f5fa15d56d/tenor.gif",
    "https://media.giphy.com/media/o7C2BKtp6gSd2/giphy.gif",
    "https://78.media.tumblr.com/cb254d1a598ae6bf6958f4f6a08866f3/tumblr_inline_npjbauKUhf1tsusim_500.gif"
];
module.exports.run = async (client, message, args) => {
    var angry = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' is angry at '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[angry]}`)
        .setFooter("Powered by Uzumaki-clan")
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription(message.author.toString() + ' is angry')
            .setColor(embedcolor)
            .setFooter("Powered by Uzumaki-clan")
            .setImage(`${imageArray[angry]}`)
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "angry"
}
