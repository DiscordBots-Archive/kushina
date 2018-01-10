const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "//";
client.commands = new Discord.Collection();
const fs = require("fs");
fs.readdir("./cmds/", (err,files) => {
    if(err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);
    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        client.commands.set(props.help.name, props);
        
    });
})
client.on("ready", async () => {
    console.log(`Kushina is online, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setGame("//help || Uzumaki Princess");
});

client.login(process.env.BOT_TOKEN);

client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
      message.channel.send("pong!");
    }
  });

  client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.indexOf(prefix) !== 0) return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(!command.startsWith(prefix)) return;
    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(client, message, args);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('topic', 'Kushina-welcome');
    if (!channel) return;
      const embed = new Discord.RichEmbed()
      .setThumbnail(member.user.displayAvatarURL)
      .setColor("#00B5B5")
      .setDescription(`Welcome ${member}`)
      .addField(`${member.guild.name}`, "- Please read the rules.\n\n- If you have questions please talk with a staff member.")
      channel.send({embed: embed});
  });
