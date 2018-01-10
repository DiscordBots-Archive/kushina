const Discord = require("discord.js");
var imageArray = [
    "https://78.media.tumblr.com/7dd785d8518634c401951e10e2d5a17d/tumblr_o2jjytAxIl1tydz8to1_500.gif",
    "https://68.media.tumblr.com/dfd8465257cd6da12eabdde0bcb1fe00/tumblr_o33i85HGlE1v90u75o1_540.gif",
    "https://vignette.wikia.nocookie.net/slimerancher/images/9/9e/Pout.gif/revision/latest?cb=20160518214302",
    "https://pa1.narvii.com/6680/aadd8ceb77b1deded865ff3755b83230a929a96a_hq.gif",
    "https://i.pinimg.com/originals/dd/8c/1b/dd8c1b1d4ef56c49d4dbfce0ccef1b7d.jpg",
    "https://static.tumblr.com/a7ce1f69a2bb82ec0d4df31c1a5cf87e/01edirv/N8cnrt5h8/tumblr_static_tumblr_static_53wa3kejv80scgkswcck4888c_640.gif",
    "http://gifimage.net/wp-content/uploads/2017/09/anime-pout-gif-3.gif",
    "https://thumbs.gfycat.com/ForkedKaleidoscopicCollie-size_restricted.gif",
];
module.exports.run = async (client, message, args) => {
    var pout = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription('' + message.author.toString() + ' pouts at '+ message.mentions.users.first())
        .setColor(embedcolor)
        .setImage(`${imageArray[pout]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            message.channel.send(" :x: You need to mention a user. meeow ~")
        }
    }

}

module.exports.help = {
    name: "pout"
}
