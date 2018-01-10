const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var mutee = message.mentions.users.array();
		if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission('ADMINISTRATOR')) {
			for(var k = 0; k < mutee.length; k++) {
				var member = message.guild.members.get(mutee[k].id);
				var user = client.users.get(mutee[k].id);
				var guild = message.guild;
				var channels = message.guild.channels.array();

				for(var i = 0; i < channels.length; i++) {
					if(channels[i].type == 'text')
						channels[i].overwritePermissions(member, {
              SEND_MESSAGES: true,
              SEND_TTS_MESSAGES: true
            })
				}
				message.reply(member + ' has been unmuted.')

		} else {
			message.reply('you do not have permission to perform this action!');
		}
}
}
module.exports.help = {
    name: "unmute"
}
