const Discord = require("discord.js");
const cooldown = new Set();
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if (!user) {
        return message.reply('You must mention someone!');
    }
    const mentioneduser = message.mentions.users.first();
    const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '-' + (mentioneduser.createdAt.getMonth() + 1) + '-' + mentioneduser.createdAt.getFullYear();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'Not currently Playing.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'He didnt sent a message.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online :green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = 'Do not Disturb :heart:';
    } else if (user.presence.status === 'idle') {
        status = 'Idle :yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = 'Offline :black_heart:';
    }
    let stat;
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('Username:', `${user.username}#${user.discriminator}`, true)
  .addField("Joined Discord", `${joineddiscord}`, true)
  .addField("Playing", `${game}`, true)
  .addField("Status", `${status}`, true)
  .addField("User ID", `${user.id}`, true)
  .setThumbnail(user.displayAvatarURL)
  .setFooter("Powered by Uzumaki-Clan")
  .addField(`Roles:`, '``' + message.mentions.members.first().roles.map(r => r.name).join(', ') + '``')
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
};
module.exports.help = {
    name: "userinfo"
}
