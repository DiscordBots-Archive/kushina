const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const { stripIndents } = require('common-tags');

module.exports.run = async (client, message, args) => {
    const { body } = await snekfetch
            .get('https://opentdb.com/api.php')
            .query({
                amount: 1,
                type: 'boolean',
                encode: 'url3986'
            });
        const answer = body.results[0].correct_answer.toLowerCase();
        const embed = new Discord.RichEmbed()
            .setTitle('You have 15 seconds to answer this question:')
            .setDescription(stripIndents`
                **${decodeURIComponent(body.results[0].category)}**
                True or False: ${decodeURIComponent(body.results[0].question)}
            `)
            .setFooter("Powered by Hanekawa.Bot™");
        await message.channel.send({embed: embed});
        try {
            const collected = await message.channel.awaitMessages((res) => res.author.id === message.author.id, {
                max: 1,
                time: 15000,
                errors: ['time']
            });
            if (collected.first().content.toLowerCase() !== answer) return message.channel.send(`Nope, sorry, it's ${answer}.`);
            else return message.channel.send('Nice job! 10/10! You deserve some cake! :cake:');
        } catch (err) {
            return message.channel.send(`Time! It was ${answer}, sorry!`);
        }
}

module.exports.help = {
    name: "quiz"
}
