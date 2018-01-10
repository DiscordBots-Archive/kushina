const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (args.length < 1) {
        message.channel.send('You must input text to be reversed! meow~');
    }
    message.channel.send(args.join(' ').split('').reverse().join(''));
}

module.exports.help = {
    name: "reverse"
}
