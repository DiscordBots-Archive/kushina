const Discord = require("discord.js");
const stripIndents = require('common-tags').stripIndents;
const RichEmbed = require('discord.js').RichEmbed;
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
        .addField('Ascii Font List', stripIndents`
                **Ascii Font List:**\n3-d\n3x5\n5lineoblique\nacrobatic\nalligator\nalligator2`);
                message.channel.send({embed: embed});
}

module.exports.help = {
    name: "ascii-list"
}
