const Discord = require("discord.js");
var imageArray = [
    "https://78.media.tumblr.com/ba913c0d21916e57b846e93b783cab39/tumblr_o505jxtnWk1vpbklao4_500.gif",
    "https://thumbs.gfycat.com/DefensiveRareChanticleer-size_restricted.gif",
    "http://i0.kym-cdn.com/photos/images/original/000/948/122/f23.gif",
    "https://78.media.tumblr.com/bec329b48b863f2e211ca7d4e3396ce9/tumblr_og7p24fa3R1vpbklao8_r6_500.gif",
    "https://pa1.narvii.com/6199/b2275f10ec5c6943848660e2c9d58778af643f0f_hq.gif",
    "https://uploads.disquscdn.com/images/68098a4aeac2caa66f5b1196c08a7b28e391e7ab45c07f2366649eca4c5adb6b.gif",
    "https://78.media.tumblr.com/tumblr_mbwaeiroE11rbtx3po1_500.gif",
    "https://i.pinimg.com/originals/9b/71/19/9b71190948ca60ee6344f5b0faf94ee6.jpg",
    "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1484896699-bed31de562f42d1d36c5ae209d916e29.gif",
    "https://orig00.deviantart.net/d4e5/f/2016/342/7/a/tickle_poke_by_otakuangelx-d9vflfu.gif",
    "https://78.media.tumblr.com/4a3aed595cc32d7bf779b8e55cc21273/tumblr_og7p24fa3R1vpbklao2_500.gif",
    "https://78.media.tumblr.com/1fcc52c8564b02439ba5ccd4482ccef8/tumblr_ni3etqeLG61qcq8slo3_500.gif",
    "https://media1.tenor.com/images/74666b5f038f46eb0147e660b5e6216b/tenor.gif"

];
module.exports.run = async (client, message, args) => {
    var tickle = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been tickled by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[tickle]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            message.channel.send(" :x: You need to mention a user. :expressionless:")
        }
    }

}

module.exports.help = {
    name: "tickle"
}
