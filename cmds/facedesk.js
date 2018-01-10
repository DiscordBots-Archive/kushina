const Discord = require("discord.js");
var imageArray = [
    "https://78.media.tumblr.com/fdb90966867fcdd525b39b65fd47e375/tumblr_mma46f4SJM1qjqvo3o1_500.gif",
    "https://media.giphy.com/media/JRMvrNMKfjqmI/200.gif",
    "https://img.neoseeker.com/mgv/59301/301/26/facedesk_display.gif",
    "http://2.bp.blogspot.com/-Uw0i2Xv8r-M/UhyYzSHIiCI/AAAAAAAAAdg/hcI1-V7Y3A4/s1600/facedesk.gif",
    "https://78.media.tumblr.com/f49102111e4c9352c332d0fbdfce483e/tumblr_ohex0o0QbR1tbxg1io1_1280.gif",
    ""
];
module.exports.run = async (client, message, args) => {
    var facedesk = [Math.floor(Math.random() * imageArray.length)]
    if (!message.mentions.users.first()) {
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const embed = new Discord.RichEmbed()
        .setDescription('' + message.author.toString() + ' facedesks!! :scream:')
        .setColor(embedcolor)
        .setImage(`${imageArray[facedesk]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    }

}

module.exports.help = {
    name: "facedesk"
}
