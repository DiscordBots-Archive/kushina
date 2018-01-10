const Discord = require("discord.js");
var imageArray = [
    "https://lh3.googleusercontent.com/-O24TEdJ0kTw/Vl34_dU5s7I/AAAAAAAJrKw/C1eRoKqAHHE/w500-h281/tumblr_lybbrrETqD1r7oz63o1_500.gif",
    "https://78.media.tumblr.com/9846bf9a1c9c9a48fe4b2a2a775aeb13/tumblr_mhw30p5nYs1qc2yh4o1_500.gif",
    "https://i.pinimg.com/originals/75/4a/a6/754aa6f3bb4fa29b8d4857ac343d1169.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/001/110/730/ebe.gif",
    "https://lh6.googleusercontent.com/-xaT7uCO-RVU/U6CM7iz7umI/AAAAAAAAAZI/u6l-8WW9UMk/w426-h239/anime-ecchi-Nisemonogatari-anime-gif-926974.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/000/771/285/f74.gif",
    "https://media1.tenor.com/images/80a9b3e20d654573c80909fb75185da6/tenor.gif",
    "https://lh3.googleusercontent.com/-oGpCi103q3k/VRcmna1t5vI/AAAAAAAAGAo/IMcZCC6owGo/w506-h750/tease.gif",
    "https://pa1.narvii.com/6155/e66833ddc6ad16f5a01db219ab25c3d809e1c45b_hq.gif"
];
module.exports.run = async (client, message, args) => {
    var tease = [Math.floor(Math.random() * imageArray.length)]
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    if (message.mentions.users.first()) {
        const embed = new Discord.RichEmbed()
        .setDescription(''+ message.mentions.users.first() + ' you have been teased by '+ message.author.toString())
        .setColor(embedcolor)
        .setImage(`${imageArray[tease]}`)
        .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed: embed});
    } else {
        if (!message.mentions.users.first()) {
            message.channel.send(" :x: You need to mention a user. :expressionless:")
        }
    }

}

module.exports.help = {
    name: "tease"
}
