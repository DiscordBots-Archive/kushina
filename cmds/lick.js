const Discord = require("discord.js");
var imageArray = [
    "https://media.giphy.com/media/12MEJ2ArZc23cY/source.gif",
    "http://i0.kym-cdn.com/photos/images/original/000/979/257/de4.gif",
    "https://media1.tenor.com/images/f76144fc20f509a5939a2744cfd09fe0/tenor.gif",
    "https://media.giphy.com/media/x4P8TaYhGn4FW/giphy.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/001/015/289/ae8.gif",
    "http://i0.kym-cdn.com/photos/images/original/000/817/864/939.gif",
    "https://media.giphy.com/media/qWAvh9GmlryEg/giphy.gif",
    "https://i.pinimg.com/originals/6c/d0/68/6cd068418b74ab0808009e692a370d9e.gif",
    "http://img1.ak.crunchyroll.com/i/spire1/92b3653029e9196cfbedfd6a5ff3dc881488421004_full.gif",
    "https://78.media.tumblr.com/0fc51db3ee68263bfac91dcfa9c3ebb6/tumblr_nwsmfzIbio1sfyp69o1_500.gif",
    "https://vignette.wikia.nocookie.net/date-a-live/images/9/9a/Kurumi_licks_shido%27s_wound.gif",
    "https://ci.memecdn.com/4974578.gif",
    "http://i55.tinypic.com/2gtxguo.gif",
    "http://i0.kym-cdn.com/photos/images/original/001/230/497/04d.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/001/063/319/24e.gif",
    "http://i0.kym-cdn.com/photos/images/original/000/981/978/4db.gif",
    "http://pa1.narvii.com/5852/4b2e3040af4d801e1ac34a3b196e2c85cb914dfc_hq.gif",
    "https://media.giphy.com/media/ky2p36qednUu4/giphy.gif",
    "https://pa1.narvii.com/6516/d3405e99f2b6fad17419632c10601157beed1150_hq.gif",
];
module.exports.run = async (client, message, args) => {
    var lick = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been licked by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[lick]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription(" Hehe :stuck_out_tongue: :yum:")
            .setColor(embedcolor)
            .setImage(`${imageArray[lick]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "lick"
}
