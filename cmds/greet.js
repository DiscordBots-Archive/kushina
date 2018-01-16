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
	var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	const embed = new Discord.RichEmbed()
	.setDescription('Random Greetings!')
	.setThumbnail(client.user.displayAvatarURL)
	.addField("Greetings!", '' + message.author.toString() + ' umm.. ' + responses[Math.floor(Math.random() * responses.length)])
        .setColor(embedcolor)
	.setFooter("Powered by Uzumaki-clan")
	message.channel.send({embed: embed})
		
}

module.exports.help = {
    name: "greet"
}
