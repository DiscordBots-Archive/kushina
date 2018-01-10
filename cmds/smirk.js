const Discord = require("discord.js");
var imageArray = [
    "https://thumbs.gfycat.com/VagueDemandingAphid-size_restricted.gif",
    "https://78.media.tumblr.com/c50bc597492dcfac20683c26865e605e/tumblr_myn6agOMg71r9j9xbo1_500.gif",
    "http://media3.giphy.com/media/UBTGgIP8q3XUY/giphy.gif",
    "https://track5.mixtape.moe/xctnap.gif",
    "https://78.media.tumblr.com/de003b35ea1d10a0d0e12c0916592709/tumblr_n07aghpRPL1r45wgho1_500.gif",
    "https://78.media.tumblr.com/a6062b7fb66a22ea74f188faca89b3ff/tumblr_o2qxzuqSqR1udwpkdo1_500.gif",
    "https://78.media.tumblr.com/eb2896ce2f9a3b72f3f291fa347760b1/tumblr_nopqvi1gBa1tbx9b9o3_500.gif",
    "https://media1.tenor.com/images/2a9ddb21510e96a903ea66613c8bdb4c/tenor.gif",
    "https://78.media.tumblr.com/85af6823591f6a7af4ff143badf93e9d/tumblr_o2se72SvaY1tydz8to1_500.gif",
    "http://gifimage.net/wp-content/uploads/2017/09/anime-evil-smirk-gif-4.gif",
    "https://orig00.deviantart.net/8838/f/2009/009/d/9/__devilish___smirk_by_sassyjessy.gif",
    "http://gifimage.net/wp-content/uploads/2017/09/anime-evil-smirk-gif.gif",
    "http://fanaru.com/elfen-lied/image/51945-elfen-lied-lucy-smirk.gif",
    "https://78.media.tumblr.com/a841b5d88b9a6e2d18a4d985c144124c/tumblr_n5xlhudPUs1txgqf5o1_500.gif"
];
module.exports.run = async (client, message, args) => {
    var smirk = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription('' + message.author.toString() + ' smirks at '+ message.mentions.users.first())
        .setColor(embedcolor)
        .setImage(`${imageArray[smirk]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            message.channel.send(" :x: You need to mention a user. :expressionless:")
        }
    }

}

module.exports.help = {
    name: "smirk"
}
