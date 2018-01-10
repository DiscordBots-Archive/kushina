const Discord = require("discord.js");
var imageArray = [
    "https://78.media.tumblr.com/913f6c8b397a28cce5d739d9e5440f13/tumblr_on0ks5LR3P1ridyfoo1_500.gif",
    "https://thumbs.gfycat.com/EnlightenedInferiorAfricanaugurbuzzard-max-1mb.gif",
    "https://media1.tenor.com/images/3b2bfd09965bd77f2a8cb9ba59cedbe4/tenor.gif",
    "https://media.giphy.com/media/aZSMD7CpgU4Za/giphy.gif",
    "https://data.whicdn.com/images/113023956/original.gif",
    "https://media.giphy.com/media/WvVzZ9mCyMjsc/giphy.gif",
    "http://i0.kym-cdn.com/photos/images/original/001/027/698/3ef.gif",
    "https://i.pinimg.com/originals/f1/6d/16/f16d16a4ac88a59168916ddfd62b49dd.gif",
    "https://media1.giphy.com/media/kq6hcEojj070k/giphy.gif",
    "https://i.pinimg.com/originals/e7/ee/6c/e7ee6c1be13877260b3cb2c07a6dd610.gif",
    "https://i.pinimg.com/originals/26/65/74/266574c657accd6c7e8452a7b9d9dc47.gif",
    "https://i.pinimg.com/originals/9d/25/23/9d25235a88f0fb52c3b72bf9404d2b7e.gif",
    "https://media1.tenor.com/images/fd46d903c4a20a7e82519a78f15b2750/tenor.gif",
    "https://media1.tenor.com/images/1236e0d70c6ee3ea91d414bcaf9f3aa4/tenor.gif",
    "https://media.giphy.com/media/LXTQN2kRbaqAw/giphy.gif",
    "https://media.giphy.com/media/SiKdZn4quIXyo/giphy.gif",
    "https://pa1.narvii.com/5679/d39dc10bcad2fd42a130de685d192c166d55f69a_hq.gif",
    "http://i0.kym-cdn.com/photos/images/original/000/929/108/c7f.gif",
    "https://i.pinimg.com/originals/2d/64/62/2d6462987a325ad10424c95f40a28483.gif"
];
module.exports.run = async (client, message, args) => {
    var poke = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been poked by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[poke]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            const embed = new Discord.RichEmbed()
            .setDescription("**Pokes you** Hey you're not sleeping right? **giggles**")
            .setColor(embedcolor)
            .setImage(`${imageArray[poke]}`)
            .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed: embed});
        }
    }

}

module.exports.help = {
    name: "poke"
}
