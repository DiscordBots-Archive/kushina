const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	const responses = [
		"Hello",
		"Hallo",
		"Nǐ hǎo",
		"Oh.. Bonjour.. J-je te trouve resplendissante aujourd'hui!.",
		"Hola!",
		"It- It's not like I wanted to say hello to you, or a-anything, B-B-BAAAAAAAAAAAKAA!!!",
		"Saudações, Vossa Excelência.",
		"Olá, ¿como estás?.",
		"Wsh, sisi la famille bien ou bien?",
		"Siema.",
		"Elo mordo.",
		"Heya!!!",
		"Hallo meine süsse",
		"Hewwo!",
		"HERRO!!"
	];
	message.channel.send('' + message.author.toString() + ' umm.. ' + responses[Math.floor(Math.random() * responses.length)])
		
}

module.exports.help = {
    name: "greet"
}
