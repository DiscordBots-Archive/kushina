const Discord = require("discord.js");
var imageArray = [
    "https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif",
    "https://m.popkey.co/88a5aa/pZA81.gif",
    "https://media.giphy.com/media/VgR9ky7IYjc9W/giphy.gif",
    "https://media.giphy.com/media/5IPhXGZWeRk64/giphy.gif",
    "https://static.fjcdn.com/gifs/Kick+source+daily+lives+of+high+school+boys_c9ccdc_4584697.gif",
    "https://media0dk-a.akamaihd.net/23/61/889fa007152a85d89f3d6a9cd80f01dd.gif",
    "https://78.media.tumblr.com/dfa5b815c6e587c2f1581d85c7c85442/tumblr_mw4irwOMjK1solyeco1_500.gif",
    "https://media.giphy.com/media/AG6C7on7n97IQ/giphy.gif",
    "https://78.media.tumblr.com/470080bf63094120650023ad5cb44a64/tumblr_nwcjxzsDuZ1ri1zbno1_500.gif",
    "https://78.media.tumblr.com/6704ffe905dff5e8688dc3b1d3996e33/tumblr_nufu9s7r7k1uyl0l9o1_500.gif",
    "https://thumbs.gfycat.com/PotableDefiniteKitty-size_restricted.gif",
    "https://78.media.tumblr.com/602ee9131d958042a9e5517926b92e24/tumblr_mqibnoCqzo1sbav3bo1_500.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/001/054/543/c22.gif",
    "https://media.giphy.com/media/xKfsn3xYGb6i4/giphy.gif",
    "https://68.media.tumblr.com/af623e927760c07c9c3d29c80ef9fecf/tumblr_inline_nelaktJcw21s8f5m5.gif",
    "https://78.media.tumblr.com/8ff860baac2d355c2282870e7dc28e09/tumblr_ok91buYrFE1uuloayo1_540.gif",
    "https://hugelolcdn.com/i/401908.gif",
    "https://orig00.deviantart.net/4da9/f/2012/091/1/8/___xd_by_ask__yoruichi-d4um5x4.gif"
];
module.exports.run = async (client, message, args) => {
    var kick = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been kicked by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[kick]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription("**Smirks and kicks you hard** :smirk:")
            .setColor(embedcolor)
            .setImage(`${imageArray[kick]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "kicks"
}
