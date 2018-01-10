const Discord = require("discord.js");
var imageArray = [
    "https://media1.tenor.com/images/06ae6bbe852471939cf61a81e5a9eb23/tenor.gif",
    "https://78.media.tumblr.com/e9fb46144efc579746e57bcaebd3350a/tumblr_olrmy4djBG1tydz8to1_500.gif",
    "http://media0.giphy.com/media/4NuAILyDbmD16/giphy.gif",
    "http://media1.giphy.com/media/yarJ7WfdKiAkE/giphy.gif",
    "http://mrwgifs.com/wp-content/uploads/2013/05/Dramatic-Crying-In-Anime-Gif.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/001/088/669/f76.gif",
    "https://i.pinimg.com/originals/98/4f/7d/984f7d56b04cc7833650d7cdb21f6c18.gif",
    "https://78.media.tumblr.com/77b952cedb15581f5bfacac95bb811cb/tumblr_n5xr523K4h1rxp2bgo1_500.gif",
    "http://gifimage.net/wp-content/uploads/2017/09/anime-boy-crying-gif-3.gif",
    "https://media.giphy.com/media/OimpWzqR5ND9e/giphy.gif"
];
module.exports.run = async (client, message, args) => {
    var cry = [Math.floor(Math.random() * imageArray.length)]
    if (!message.mentions.users.first()) {
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const embed = new Discord.RichEmbed()
        .setDescription('' + message.author.toString() + ' is crying')
        .setColor(embedcolor)
        .setImage(`${imageArray[cry]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    }

}

module.exports.help = {
    name: "cry"
}
