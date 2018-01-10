const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    const fetch = require('snekfetch');
    fetch.get('https://random.cat/meow').then(cat => {
        const embed = new Discord.RichEmbed()
    .setImage(`${cat.body.file}`)
    .setFooter("Powered by Uzumaki-Clan");
        message.channel.send({embed}).catch(e => logger.error(e))
    }).catch(err => {
        if (err) {
            message.channel.send('OOPS something went wrong...');
        }
    });
};

module.exports.help = {
    name: "cat"
}
