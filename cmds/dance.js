const Discord = require("discord.js");
var imageArray = [
    "http://bestanimations.com/Music/Dancers/anime-dancing-girls/anime-dancing-girl-3.gif",
    "https://media.giphy.com/media/iojVZwvhzY9wI/giphy.gif",
    "https://m.popkey.co/76b5e7/NlZaX.gif",
    "https://media.giphy.com/media/xKJAXlq2TNeFO/giphy-downsized-large.gif",
    "https://i.pinimg.com/originals/92/64/44/9264448b922ea0ed0b537f5b8baa36b3.gif",
    "https://media.giphy.com/media/BE07kHdqBDKrC/giphy.gif",
    "http://i0.kym-cdn.com/photos/images/original/000/924/832/075.gif",
    "https://78.media.tumblr.com/f686dc36c3e402f4679e17d1565892bf/tumblr_ow13r7AMR21wt7ek9o1_500.gif",
    "https://img.fireden.net/a/image/1472/69/1472691290793.gif",
    "https://media.giphy.com/media/Z5MYGDE2e5Rhm/giphy.gif",
    "https://media.giphy.com/media/oy8FiuwqTfWdW/giphy.gif",
    "http://images6.fanpop.com/image/photos/33500000/anime-dancer-msyugioh123-33558535-500-223.gif"
];
module.exports.run = async (client, message, args) => {
    var dance = [Math.floor(Math.random() * imageArray.length)]
    if (!message.mentions.users.first()) {
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const embed = new Discord.RichEmbed()
        .setDescription('' + message.author.toString() + ' is dancing')
        .setColor(embedcolor)
        .setImage(`${imageArray[dance]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    }

}

module.exports.help = {
    name: "dance"
}
