const Discord = require("discord.js");
var imageArray = [
    "https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif",
    "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/cd/Slap.gif.gif",
    "https://media.giphy.com/media/LB1kIoSRFTC2Q/giphy.gif",
    "https://orig00.deviantart.net/2d34/f/2013/339/1/2/golden_time_flower_slap_gif_by_paranoxias-d6wv007.gif",
    "https://media1.tenor.com/images/1cf84bf514d2abd2810588caf7d9fd08/tenor.gif?itemid=7679403",
    "https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/000/940/326/086.gif",
    "https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif",
    "https://s1.favim.com/orig/140403/anime-funny-haruno-naruto-Favim.com-1603470.gif",
    "https://media.giphy.com/media/PrXKpiHKVCYUw/giphy.gif",
    "https://pa1.narvii.com/6120/33a4a7fb72b901a33a90124c1070fa203f66ac61_hq.gif",
    "http://img11.hostingpics.net/pics/2928522ef4594b41b696092382da6e488af99c58fc3a76hq.gif",
    "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.jpg",
    "https://media1.tenor.com/images/f42b4f2b7b6e69fc612b56b112a2e1e5/tenor.gif",
    "https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif",
    "http://orig03.deviantart.net/45a9/f/2014/023/2/4/senza_titolo_1_by_lightning441-d73dgey.gif",
    "https://vignette.wikia.nocookie.net/prettycure/images/3/39/Cure_Sword_slap.gif",
    "https://vignette.wikia.nocookie.net/crossoverrp/images/f/f7/Asuma_slap_-_SAO.gif/revision/latest?cb=20140728012509",
];
module.exports.run = async (client, message, args) => {
    var slap = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been slapped by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[slap]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription("**Smirks and slaps you** :smiling_imp:")
            .setColor(embedcolor)
            .setImage(`${imageArray[slap]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "slap"
}
