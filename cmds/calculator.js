const Discord = require("discord.js");
const RichEmbed = require('discord.js').RichEmbed;
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
module.exports.run = async (client, message, args) => {
    if (args.length < 1) {
        throw 'You must provide a equation to be solved on the calculator';
    }

    const question = args.join(' ');

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        throw `Invalid math equation: ${err}`;
    }

    message.delete();
    
        let embed = new Discord.RichEmbed()
        .addField('Answer', stripIndents`
                **Equation:**\n\`\`\`\n${question}\n\`\`\`
                **Answer:**\n\`\`\`\n${answer}\n\`\`\``);
                message.channel.send({embed: embed});
}

module.exports.help = {
    name: "calculator"
}
