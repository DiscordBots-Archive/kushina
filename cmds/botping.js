const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	message.channel.send('Ping?').then(m => m.edit(`Latency : ${m.createdTimestamp - message.createdTimestamp}ms. API Latency ${Math.round(client.ping)}ms`) );  
}

module.exports.help = {
    name: "botping"
}
