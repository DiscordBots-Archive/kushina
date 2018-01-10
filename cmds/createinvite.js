const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	message.channel.createInvite().then(invite =>  
		message.channel.send(invite.url).catch(error => message.reply(`I couldn't do this :/ , here the error : ${error}`)));
    
}

module.exports.help = {
	name: "createinvite"
}
