const Discord = require("discord.js");
const leetspeak = require('leetspeak');
var request = require('request');
module.exports.run = async (client, message, args) => {
    if(!args) {
        message.channel.send('61v3 m3 50m37h1n6 70 c0nv3r7!')
    }
    let text = args.join(" ")
    var leetspeak = require('leetspeak')
    let converted = leetspeak(text)
    message.channel.send(`\`\`\`${converted}\`\`\``)
}

module.exports.help = {
    name: "leet"
}
