const Discord = require("discord.js");
var imageArray = [
    "https://pa1.narvii.com/6004/4a589d6cc369ec42110b919cadf579027e7f842b_hq.gif",
    "https://media.giphy.com/media/IwrQN4UIs7paE/giphy.gif",
    "http://mrwgifs.com/wp-content/uploads/2013/04/Snuggling-Cuddling-Anime-Girls-Gif-.gif",
    "http://gifimage.net/wp-content/uploads/2017/09/anime-cuddle-gif-7.gif",
    "http://i0.kym-cdn.com/photos/images/original/001/094/799/80e.gif",
    "https://i.pinimg.com/originals/c6/3a/48/c63a48856edab67f2e5c9b9c8a10d21e.gif",
    "https://im-01.gifer.com/5ZHH.gif",
    "http://cloud-3.steamusercontent.com/ugc/90469323238664943/002A80EA965A0FF9B9382EBDE037BBC7886C8DDE/",
    "https://img.fireden.net/a/image/1447/43/1447431152281.gif",
    "https://media.giphy.com/media/ttThLoTVJb1EQ/giphy.gif",
    "https://media1.tenor.com/images/62c89d9d357a05fae42887ea732deaf9/tenor.gif",
    "https://media1.tenor.com/images/f0965bd19d0042052ddf729c22e284ad/tenor.gif",
    "https://media.giphy.com/media/NTBFwChJg9lKM/giphy.gif",
    "https://media.giphy.com/media/qKqV3G8REzMD6/giphy.gif",
    "https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif",
    "https://preview.ibb.co/nN4gPw/cuddle_1.gif",
    "https://preview.ibb.co/nuCPcG/cuddle.gif",
    "https://image.ibb.co/hDRd4w/cuddle_2.gif",
    "https://image.ibb.co/enegPw/cuddle_3.gif"
];
module.exports.run = async (client, message, args) => {
    var cuddle = [Math.floor(Math.random() * imageArray.length)]
        if (message.mentions.users.first()) {
            var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been cuddled by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[cuddle]}`)
        .setFooter("Powered by Uzumaki-Clan");
    message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription("Kushina cuddles with you **giggles** :heart: ")
            .setColor(embedcolor)
            .setImage(`${imageArray[cuddle]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }
    

}

module.exports.help = {
    name: "cuddle"
}
