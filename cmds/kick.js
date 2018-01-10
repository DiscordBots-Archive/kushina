const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  var banee = message.mentions.users.array()[0];

  if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission('ADMINISTRATOR')) {
    try {
      var kicked = message.guild.members.get(banee.id);
      var user = client.users.get(banee.id);
      var guild = message.guild;
      var reason = message.content.split(" ").splice(1).join(" ");

      if(reason == "")
        var reason = "Not specified.";

      kicked.kick(reason);

      message.reply(banee + " has been successfullly kicked.");
  } else {
    message.reply(" you do not have permission to perform this action!");
  }
}


module.exports.help = {
    name: "kick"
}
