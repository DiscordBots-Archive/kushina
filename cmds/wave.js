const Discord = require("discord.js");
var imageArray = [
    "https://m.popkey.co/4fb93f/mEQM3.gif",
    "https://media1.tenor.com/images/72c9b849aa10b222371ebb99a6b1896a/tenor.gif",
    "https://media.giphy.com/media/VUC9YdLSnKuJy/giphy.gif",
    "https://78.media.tumblr.com/8ad5ef23cab77faf004601c3201fc127/tumblr_oalo4fRB5M1tydz8to1_500.gif",
    "https://media3.giphy.com/media/F99PZtJC8Hxm0/giphy.gif",
    "https://m.popkey.co/c8e2ec/bXEW1.gif",
    "https://i.pinimg.com/originals/97/99/fc/9799fc12ca9f1a7629bb70ecac422416.gif",
    "https://media1.tenor.com/images/d5e6472ab9473913382e82ecc298f1a2/tenor.gif",
    "https://media1.tenor.com/images/0cdd4823860ebba9ec3a3c861c4bda05/tenor.gif",
    "https://68.media.tumblr.com/1bd8ae3f194545eafacd0e3f749d2cc9/tumblr_n8eohbtB6K1sglevjo1_400.gif",
    "http://media.giphy.com/media/xpgpXaXaDgvJK/giphy.gif",
    "https://78.media.tumblr.com/17b0edaa7b7d5e8350f74390629195c3/tumblr_notq4gp0qw1us70pno1_500.gif",
    "https://orig00.deviantart.net/34f8/f/2014/131/1/a/wave_by_monnick-d7i06j2.gif",
    "https://78.media.tumblr.com/ce7ee63a7c4bfc1d3378b4ba7db11f20/tumblr_moexmjAp9j1rrpeyuo1_500.gif"
];
module.exports.run = async (client, message, args) => {
    var wave = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' waves at '+ message.author.toString() + ' goodbye!')
        .setColor(embedcolor)
        .setImage(`${imageArray[wave]}`)
        .setFooter("Powered by Uzumaki-clan")
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription(''+ message.author.toString() +' waves at everyone bye!')
            .setColor(embedcolor)
            .setFooter("Powered by Uzumaki-clan")
            .setImage(`${imageArray[wave]}`)
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "wave"
}
