const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	if (message.mentions.users.array()[0])
			var member = message.guild.members.get(message.mentions.users.array()[0].id);
		else if (client.users.get(message.content) != null)
			var member = message.guild.members.get(message.content);
		else
			var member = message.guild.members.get(message.author.id);

		var p = member.permissions.serialize(true)

		var perms = new Discord.RichEmbed()
			.setAuthor(member.user.username + '#' + member.user.discriminator, member.user.avatarURL)
			.setDescription("User Permissions for " + message.guild.name)
			.setColor(0x1675DB)

		var i = 0;
		for (var key in p) {
			if (p.hasOwnProperty(key) && i < 24) {
				if (p[key] == false)
					perms.addField(blah(key), ":x:", true);
				else
					perms.addField(blah(key), ":white_check_mark:", true);
				i++;
			} 
            if(i == 24) {
                message.channel.send({embed: perms})
                var perms = new Discord.RichEmbed()
                .setFooter('Triggered by ' + message.author.username, message.author.avatarURL)
                .setFooter("Powered by Hanekawa.Bot™");
                i = 0;
            }
		}

        message.channel.send({embed: perms})

		function blah(str) {
            if(str == "MANAGE_ROLES_OR_PERMISSIONS") str = "MANAGE_ROLES"
			str = str.replace(new RegExp("_", "g"), " ");
			return str.replace(/\w\S*/g, txt => {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
			});
		}
}



module.exports.help = {
	name: "perms"
	
}
