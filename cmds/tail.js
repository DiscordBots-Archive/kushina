const Discord = require("discord.js");
var imageArray = [
"https://data.whicdn.com/images/84232253/original.gif",
"https://78.media.tumblr.com/8203abcf4aef7f528eb61206710bfdce/tumblr_nnwn56DQuR1ty38iao1_400.gif",
"https://media.tenor.com/images/a2a943adaa8009700dc226a02687d38c/tenor.gif",
"https://thumbs.gfycat.com/SecondhandDisguisedChimpanzee-size_restricted.gif",
"https://thumbs.gfycat.com/MilkyDirectAmmonite-max-1mb.gif",
"http://pa1.narvii.com/6070/c8741c6431b9bf3ffeb1eedb3a83fd9a22594d2e_hq.gif",
"https://pa1.narvii.com/5841/f2cb9ede1137ccf6ba54cdbd8b4031a31260413e_hq.gif",
"https://68.media.tumblr.com/c54e506582785a3e89d223fa3dba2fd6/tumblr_nyman1FuBi1tydz8to1_500.gif",
"https://78.media.tumblr.com/tumblr_lp8l0zmIj21qhzyzho1_500.gif",
"http://orig13.deviantart.net/90b5/f/2013/091/b/5/b580680802087d1ff5ad917788fa5b24-d603ffh.gif",
"https://orig00.deviantart.net/c241/f/2009/100/b/7/ikuto__s_gotcha_again___gif__by_nemomeliorest.gif",
"https://78.media.tumblr.com/01e9cc48310fbe72b2ccf1b52925d0c4/tumblr_o3at2et2G31tydz8to1_540.gif",
"http://pa1.narvii.com/6385/90efdf4d694d52fe993c335fb90f50e6ed486af1_hq.gif",
"http://forum.wotlabs.net/uploads/monthly_2015_10/wag2.gif.3eea1e4d76fed4e30e0d3b1c4f4ebbdf.thumb.gif.d1a842833fd3cbfb209e6ecb32297325.gif",
"https://secure.static.tumblr.com/753b4405d4c926ef8224e3ac5ec30aef/f52giag/4Uin6xuha/tumblr_static_tumblr_static_2p47ogg0mhus4gs8skwwcc8sw_640.gif"
];
module.exports.run = async (client, message, args) => {
    var tail = [Math.floor(Math.random() * imageArray.length)]
    if (!message.mentions.users.first()) {
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const embed = new Discord.RichEmbed()
        .setDescription("Random tail wagging images")
        .setColor(embedcolor)
        .setImage(`${imageArray[tail]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    }

}

module.exports.help = {
    name: "tail"
}
