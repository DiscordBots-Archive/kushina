const Discord = require("discord.js");
var imageArray = [
    "https://media1.tenor.com/images/d7542a2525f4d92f1ee0b14c21470665/tenor.gif",
    "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
    "https://media1.tenor.com/images/8343760e0c7642d0ba63e0d7989d4e7d/tenor.gif",
    "https://uploads.disquscdn.com/images/aa0761824db4e88f9d8daf5eca9e0fc3c84ea30b8c063a359ee65c9c8013d354.gif",
    "http://i65.tinypic.com/2mdqski.gif",
    "https://wethehunted.files.wordpress.com/2016/07/toradora-taiga-and-ryuuji-kiss.gif",
    "https://data.whicdn.com/images/105656005/original.gif",
    "http://files.57gif.com/webgif/0/2/3f/5977d3963769ef8f3d2c52d7430ee.gif",
    "https://pa1.narvii.com/5870/d0740ac6cd5006f9098cd13866093a8ba609863c_hq.gif",
    "http://www.lovethisgif.com/uploaded_images/81034-Week-Of-March-5th-Anime-Review-Ano-Natsu-inu-X-Boku-black-Rock-....gif",
    "https://78.media.tumblr.com/d81c14ddb9339c592d847b52af45049d/tumblr_nobqmw0fi21sy5k7wo1_500.gif",
    "http://cloud-3.steamusercontent.com/ugc/313367698743544215/E353363E65B6F7A9FD5FAC8192B682AC3EDE4BBC/",
    "https://media.giphy.com/media/rCPupQA9WJW48/giphy.gif",
    "https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif",
    "https://vignette.wikia.nocookie.net/aquarion/images/1/18/Kiss.gif",
    "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",
    "https://media.giphy.com/media/XdOMXwkrKmXSM/giphy.gif",
    "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
    "https://78.media.tumblr.com/81bba396a3fcaa0e1745b620d44fe358/tumblr_om9fxeeZFR1rm4ik9o1_500.gif",
    "https://media.giphy.com/media/lBGj9wHG59Xr2/giphy.gif",
    "https://media1.tenor.com/images/327d9183649ecc40497424c4249c4b4a/tenor.gif",
    "https://pa1.narvii.com/5971/59017b02a30fbd83c051aa5218926e49ac45e4bc_hq.gif",
    "https://media.giphy.com/media/8iwfa0XSxDUSQ/giphy.gif",
    "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
    "https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif",
    "https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif",
    "https://media.giphy.com/media/10r6oEoT6dk7E4/giphy.gif",
    "https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
    "https://media1.tenor.com/images/a562410344e8b88fd737dfc9a4b6b1e1/tenor.gif",
    "https://media1.tenor.com/images/e76e640bbbd4161345f551bb42e6eb13/tenor.gif",
    "https://media1.tenor.com/images/b011c3ec014e3fc90b071e477e9f9054/tenor.gif",
    "https://media1.tenor.com/images/38625b424058a59d1dd87b32f1c31dcf/tenor.gif",
];
module.exports.run = async (client, message, args) => {
    var kiss = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been kissed by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[kiss]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription("You want me to kiss you? If you want that :kissing_heart:")
            .setColor(embedcolor)
            .setImage(`${imageArray[kiss]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "kiss"
}
