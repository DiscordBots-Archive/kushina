const Discord = require("discord.js");
var imageArray = [
    "http://i0.kym-cdn.com/photos/images/newsfeed/000/985/688/015.gif",
    "https://neetaku86.files.wordpress.com/2017/02/giphy2.gif?w=480",
    "https://78.media.tumblr.com/70009bd241c9857aa8e5bcdb7a1e5928/tumblr_okzqunvNrG1tkf3aao1_500.gif",
    "https://pa1.narvii.com/6287/9a24569f737b3b363fdf0f114a8713dd0a342761_hq.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/001/027/821/8fa.gif"
];
module.exports.run = async (client, message, args) => {
    var triggered = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription('' + message.author.toString() + ' is triggered')
            .setColor(embedcolor)
            .setImage(`${imageArray[triggered]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

module.exports.help = {
    name: "triggered"
}
