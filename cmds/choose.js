const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (!args) return message.channel.send(`${message.author} you have to input arguments!`);
    let pP;
    if (args.toString().includes('|')) {
      pP = args.join(' ').split('|');
    } else if (args.toString().includes('or')) {
      pP = args.join(' ').split('or');
    } else {
      pP = args;
    }
    let answer = pP[Math.floor(Math.random() * pP.length)];
    answer = answer.replace(' ', '') || answer;
    await message.channel.send(`I choose **${answer}**`);
  
}

module.exports.help = {
    name: "choose"
}
