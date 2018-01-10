const Discord = require("discord.js");
const cooldown = new Set();
module.exports.run = async (client, message, args) => {
    exports.run = function (client, message) {
        const fetch = require('snekfetch');
        fetch.get('http://www.splashbase.co/api/v1/images/random').then(photo => {
            const embed = new Discord.RichEmbed()
        .setImage(`${photo.body.url}`)
        .setFooter("Powered by Uzumaki-Clan");
            message.channel.send({embed})
        .catch(e => logger.error(e));
        }).catch(err => {
            if (err) {
                message.channel.send('OOPS... something went wrong');
            }
        });
    };
}

module.exports.help = {
    name: "splash"
}
