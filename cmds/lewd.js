const Discord = require("discord.js");
var imageArray = [
    "https://78.media.tumblr.com/bbb66ade11bcd697d1a6d47bcd2bc54c/tumblr_o80elkA2wA1uhpv9wo1_500.gif",
    "https://pa1.narvii.com/5739/ec4cfb18117ef0d286ea61f833064838f8ba21b9_hq.gif",
    "https://media.giphy.com/media/12lLTU2L0CIufC/giphy.gif",
    "https://media.giphy.com/media/DHT6OLrSGU8z6/giphy.gif",
    "https://media.giphy.com/media/tzsDBl1P5f2Io/giphy.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/000/957/307/ee1.gif",
    "https://media1.tenor.com/images/71015cf10d2bc6ddc6c2dd0d7b294277/tenor.gif",
    "https://pa1.narvii.com/5739/635fc42eeb741a8645b27fca6d1ea4d03982f115_hq.gif"
];
module.exports.run = async (client, message, args) => {
    var lewd = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.author.toString() + ' say\'s ' + message.mentions.users.first() + ' is lewd!')
        .setColor(embedcolor)
        .setImage(`${imageArray[lewd]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription("You're Lewd!! :flushed:")
            .setColor(embedcolor)
            .setImage(`${imageArray[lewd]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "lewd"
}
