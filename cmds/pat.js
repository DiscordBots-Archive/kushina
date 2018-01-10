const Discord = require("discord.js");
var imageArray = [
    "https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif",
    "https://m.popkey.co/a5cfaf/1x6lW.gif",
    "https://thumbs.gfycat.com/AcceptableBitesizedArachnid-max-1mb.gif",
    "https://media.giphy.com/media/xLm9fux5DSodq/giphy.gif",
    "http://pa1.narvii.com/6451/a2ed84c9d486fff04ce6769b2e365baf1bba4d6a_hq.gif",
    "https://vignette.wikia.nocookie.net/cardfight/images/b/ba/Izumi_Reina_pat.gif/revision/latest?cb=20170112141639",
    "https://media1.tenor.com/images/2b2f9c5d046ea2cdaca41dfdc4356eea/tenor.gif",
    "https://78.media.tumblr.com/3d90d7dc83126de919a8ee7bdfbfcc2d/tumblr_nwnb5jRdsh1u7nlyno1_500.gif",
    "https://i.pinimg.com/originals/c0/3f/58/c03f5817acde4b1c168d31ffe02c522e.gif",
    "http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-20.gif",
    "https://media.giphy.com/media/109ltuoSQT212w/giphy.gif",
    "http://giffiles.alphacoders.com/248/2482.gif",
    "https://pa1.narvii.com/5782/1c0ff11f2ae7295fa620c8e03fa6db6bd646a4f8_hq.gif"
];
module.exports.run = async (client, message, args) => {
    var pat = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been patted by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[pat]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            message.channel.send(" :x: You need to mention a user. :expressionless: ")
        }
    }

}

module.exports.help = {
    name: "pat"
}
