const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var mutee = message.mentions.users.array();

		for(var k = 0; k < mutee.length; k++) {
			var reason = message.content.split(" ").splice(mutee.length).join(" ");
			var user = client.users.get(mutee[k].id);
			var guild = message.guild;
			var member = message.guild.members.get(mutee[k].id);

			if(member.hasPermission("ADMINISTRATOR"))
				return message.channel.send("I can't mute " + user + "!")

			message.guild.channels.forEach(channel => {
                if(channel.type == 'text')
                    channel.overwritePermissions(member, {
                        SEND_MESSAGES:  false,
                        SEND_TTS_MESSAGES: false
                    })
			})

			message.reply(member + ' has been muted.')

		}
}




module.exports.help = {
    name: "mute"
}
