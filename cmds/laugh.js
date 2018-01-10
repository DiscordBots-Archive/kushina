const Discord = require("discord.js");
var imageArray = [
    "https://78.media.tumblr.com/c687bc614458f294922daf880c24248b/tumblr_om93wdfZTF1tydz8to1_500.gif",
    "https://media.giphy.com/media/12scWlqkDOzDKo/giphy.gif",
    "https://media.giphy.com/media/tnxOOIUL0BCLe/giphy.gif",
    "https://media1.tenor.com/images/fb80a2dd4fdb86c6eeee94125f23c161/tenor.gif",
    "http://static.comicvine.com/uploads/original/11113/111134695/4357067-3900346009-laugh.gif",
    "https://media.giphy.com/media/pa1WaYStUKyLC/giphy.gif",
    "http://i1.kym-cdn.com/photos/images/newsfeed/000/167/499/laughinggirls.gif",
    "https://media1.tenor.com/images/766b72ce843075ebe5a3d10841a3651b/tenor.gif",
    "https://78.media.tumblr.com/404c177395b0259201033fac0c04209e/tumblr_o0jsclhBi61udouqko1_500.gif",
    "http://gifimage.net/wp-content/uploads/2017/08/laughing-anime-gif-23.gif",
    "https://pa1.narvii.com/5793/c89560585d987ecf501e048664275947e9bbb924_hq.gif",
    "https://media.giphy.com/media/8maVEb9ZMvdrq/giphy.gif",
    "https://uploads.disquscdn.com/images/a31f209c3e337eef686fdd8f67328616ecbb2fc755c33209503bd86c99d314d2.gif",
    "https://m.popkey.co/5468c2/oGJgD.gif",
    "https://media.tenor.com/images/0944ac9bc62026c81078217f68b77c19/tenor.gif"
    
];
module.exports.run = async (client, message, args) => {
    var laugh = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription('' + message.author.toString() + ' laughs at '+ message.mentions.users.first())
        .setColor(embedcolor)
        .setImage(`${imageArray[laugh]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription(message.author.toString() + ' is laughing')
            .setColor(embedcolor)
            .setImage(`${imageArray[laugh]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "laugh"
}
