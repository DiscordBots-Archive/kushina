const Discord = require("discord.js");
const stripIndents = require('common-tags').stripIndents;
const RichEmbed = require('discord.js').RichEmbed;
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
        .addField('List', stripIndents`
                **Ascii Font List:**\n3-d\n3x5`);
                message.channel.send({embed: embed});
}

module.exports.help = {
    name: "ascii-list"
}
