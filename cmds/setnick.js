const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.id === '366677235597574155') {
        let nickname = args.join(" ");
        message.delete();
        if (!message.guild.member(client.user).hasPermission('CHANGE_NICKNAME')) {
            message.channel.send('', {
                embed: {
                    author: {
                      name: client.user.username
                    },
                    color: 0x008AF3,
                    title: 'No permissions',
                    description: 'I don\'t have the required permissionsto change my nickname.',
                    footer: {
                      text: 'Shihouin Bot',
                      icon_url: client.user.avatarURL
                    }
                }
            });
        } else {
            message.guild.member(client.user).setNickname(nickname);
            message.channel.send('', {
                embed: {
                    author: {
                    name: client.user.username
                    },
                    color: 0x008AF3,
                    title: 'Nickname changed successfully!',
                    description: `Nickname changed to **${nickname}**!`,
                    footer: {
                        text: 'Shihouin Bot',
                        icon_url: client.user.avatarURL
                    }
                }
            });
        }
    }
    };

module.exports.help = {
    name: "setnick"
}
