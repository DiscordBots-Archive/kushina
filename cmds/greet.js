const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	const responses = [
		"It's certain",
		"Decidedly so",
		"Without a doubt",
		"Yes, definitely",
		"You may rely on it",
		"Most likely",
		"Yes",
		"Better not tell you now",
		"Cannot predict now",
		"Concentrate and ask again",
		"Don't count on it",
		"No",
		"My sources say no",
		"Outlook not so good",
		"Very doubtful"
	];
	if (args.length < 1) return message.channel.send(`Please input a question`)
    message.channel.send('' + responses[Math.floor(Math.random() * responses.length)] + message.author.toString())
		return true
}

module.exports.help = {
    name: "greet"
}
