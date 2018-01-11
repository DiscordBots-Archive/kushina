const Discord = require("discord.js");
var imageArray = [
    "https://media.giphy.com/media/LdsJrFnANh6HS/giphy.gif",
    "https://media.giphy.com/media/iWAqMe8hBWKVq/giphy-downsized-large.gif",
    "https://media.giphy.com/media/YjHx1taZwpfd6/giphy.gif",
    "https://pa1.narvii.com/5668/d845ea44f1ce209351976f2a22b4c728873fac21_hq.gif",
    "https://pa1.narvii.com/6084/b9e77789372932de97e5cf1bd046a348fd7ca080_hq.gif",
    "https://media1.tenor.com/images/995c766275e66c3aa5efd55ab7d8f86a/tenor.gif",
    "http://gifimage.net/wp-content/uploads/2017/09/anime-punch-in-the-face-gif-3.gif",
    "https://media.giphy.com/media/11On6xCGyBrAA0/giphy.gif"
];
module.exports.run = async (client, message, args) => {
    var punch = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been punched by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[punch]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription("Yesh!! I'll beat you now :laughing:")
            .setColor(embedcolor)
            .setImage(`${imageArray[punch]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "punch"
}
