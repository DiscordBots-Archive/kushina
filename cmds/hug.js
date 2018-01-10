const Discord = require("discord.js");
var imageArray = [
    "https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif",
    "https://media1.tenor.com/images/45b1dd9eaace572a65a305807cfaec9f/tenor.gif",
    "https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif",
    "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif",
    "https://media1.tenor.com/images/eb592ac3aff619edfa67dbc9b2ce216e/tenor.gif",
    "https://media1.tenor.com/images/ba2328b7fb5d0998deb7e06600089709/tenor.gif",
    "https://media1.tenor.com/images/112c2abcf585b37e6c6950ebc3ab4168/tenor.gif",
    "https://media1.tenor.com/images/1b66ce5c8ab6cbc5a76f676c682fe18a/tenor.gif",
    "https://media1.tenor.com/images/03ff67460b3e97cf13aac5d45a072d22/tenor.gif",
    "https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif",
    "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
    "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460993069-9ac8eaae8cd4149af4510d0fed0796bf.gif",
    "https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif",
    "http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-12.gif",
    "https://78.media.tumblr.com/14f5e0c6ef88280f75017987302a7dad/tumblr_o3scuxSiLZ1qdq20ho1_500.gif",
    "https://i.pinimg.com/originals/c0/18/73/c01873aee2c0e797a774fc88b8c1d172.gif",
    "https://data.whicdn.com/images/54965224/original.gif",
    "https://media.giphy.com/media/nFL0SBciehEw8/giphy.gif",
    "http://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-28.gif",
    "https://media1.tenor.com/images/234d471b1068bc25d435c607224454c9/tenor.gif",
    "https://media.giphy.com/media/xZshtXrSgsRHy/source.gif",
    "http://goboiano.com/wp-content/uploads/2017/07/FMALesson16.gif",
    "https://pa1.narvii.com/6368/ae42d5f38e6c610248b73103aa8d0ca16040127e_hq.gif",
    "https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif",
    "http://i0.kym-cdn.com/photos/images/original/000/642/280/8ae.gif",
    "https://lynaeina.files.wordpress.com/2010/06/huggychunnie.gif",
    "https://media.giphy.com/media/f5hhE6f3h8Vkk/giphy.gif",
    "https://i.pinimg.com/originals/9a/27/cd/9a27cdcbc6796298327569f99fd4e60f.gif",
    "https://media1.tenor.com/images/2b54a605f183adbfc6898e6820eb62b4/tenor.gif",
    "https://78.media.tumblr.com/ce3aad3f1d570fa06c253abfccf36d1b/tumblr_msexao8iX51re6rdoo1_500.gif"
];
module.exports.run = async (client, message, args) => {
    var hug = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been hugged by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[hug]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription("You need hugs? **hugs you**")
            .setColor(embedcolor)
            .setImage(`${imageArray[hug]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "hug"
}
