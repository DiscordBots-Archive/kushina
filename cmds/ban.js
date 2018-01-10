const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  var banee = message.mentions.users.array()[0];

		if (message.member.hasPermission('BAN_MEMBERS') === true || message.member.hasPermission('ADMINISTRATOR') === true) {
			try {
				var banned = message.guild.members.get(banee.id);
				var user = client.users.get(banee.id);
				var guild = message.guild;
				var reason = message.content.split(" ").splice(1).join(" ");

				if(reason == "")
					var reason = "Not specified.";

				banned.ban(reason);

				message.reply(banee + " has been successfullly banned.");
			} catch (e) {
				console.error(e);
			}
		} else {
			message.reply(" you do not have permission to perform this action!");
    }
}


module.exports.help = {
    name: "ban"
}
