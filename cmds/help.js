const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        if(!args[0]) {
        message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Help")
        .setDescription("Here all categories : \n- Actions \n- Image \n- Core \n- Fun \n- Search \n- Other \n- Owner \n- NSFW")
        .setColor(embedcolor)
        .setTitle("Help Command")
        .setFooter("Requested by: " + message.author.tag)
      })
    }
    if(args[0] === "Actions") {
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Help")
        .setDescription("Here all actions commands : \n- angry \n- bite \n- cry \n- cuddle \n- dance \n- facedesk \n- hug \n- kicks \n- kiss \n- laugh \n- lewd \n- lick \n- pat \n- poke \n- pout \n- punch \n- slap \n- smirk \n- spank \n- tease \n- tickle \n- triggered \n- wasted")
        .setColor(embedcolor)
        .setTitle("Help Command")
        .setFooter("Requested by: " + message.author.tag)
      });
    }
    if(args[0] === "Image") {
        message.channel.send("", {
            embed: new Discord.RichEmbed()
            .setTitle("Help")
            .setDescription("Here all image commands : \n- anime \n- animeme \n- avatar \n- bear \n- bird \n- cat \n- cute \n- dankmeme \n- dog \n- meme \n- neko \n- pokemon \n- splash \n- tail \n- yesorno")
            .setColor(embedcolor)
            .setFooter("Requested by: " + message.author.tag)
        });
    }
   
    if(args[0] === "Core") {
        message.channel.send("", {
            embed: new Discord.RichEmbed()
            .setTitle("Help")
            .setDescription("Here all core commands : \n- botinfo \n- botinvite \n- botping \n- channels \n- channeltopic \n- clear \n- coding  \n- feedback  \n- help \n- mention \n- ownerdm \n- perms \n- serverinfo \n- servers \n- userinfo")
            .setColor(embedcolor)
            .setTitle("Help Command")
            .setFooter("Requested by: " + message.author.tag)
          }); 
        }
        if(args[0] === "Fun") {
            message.channel.send("", {
                embed: new Discord.RichEmbed()
                .setTitle("Help")
                .setDescription("Here all fun commands : \n- ascii \n- choose \n- choose-user \n- chuck \n- coinflip \n- cowsay \n- embed \n- emotify \n- fight \n- leet \n- lenny \n- react \n- reverse ")
                .setColor(embedcolor)
                .setTitle("Help Command")
                .setFooter("Requested by: " + message.author.tag)
              }); 
            }

            if(args[0] === "Search") {
                message.channel.send("", {
                    embed: new Discord.RichEmbed()
                    .setTitle("Help")
                    .setDescription("Here all search commands : \n- catfacts  \n- imdb \n- lmgtfy \n- today \n- urban \n- weather")
                    .setColor(embedcolor)
                    .setTitle("Help Command")
                    .setFooter("Requested by: " + message.author.tag)
                  }); 
                }
    
        if(args[0] === "Other") {
        message.channel.send("", {
            embed: new Discord.RichEmbed()
            .setTitle("Help")
            .setDescription("All Other commands: \n- 8ball \n- advice \n- calculator \n- joke \n- poll  \n- quiz \n- roll \n- rude \n- say \n- would-you \n- yomama")
            .setColor(embedcolor)
            .setTitle("Help Command")
            .setFooter("Requested by: " + message.author.tag)
          }); 
        }
    if(args[0] === "Owner") {
        message.channel.send("", {
            embed: new Discord.RichEmbed()
            .setTitle("Help")
            .setDescription("Here all bot-owner commands : \n- setavatar \n- setgame \n- setname \n- setnick \n- setstatus")
            .setColor(embedcolor)
            .setTitle("Help Command")
            .setFooter("Requested by: " + message.author.tag)
          });
        }

        if(args[0] === "NSFW") {
            message.channel.send("", {
                embed: new Discord.RichEmbed()
                .setTitle("Help")
                .setDescription("Here all NSFW commands : \n- danbooru \n- ecchi \n- hentai \n- lewd-neko \n- rude34")
                .setColor(embedcolor)
                .setTitle("Help Command")
                .setFooter("Requested by: " + message.author.tag)
              });
            }
   
}


module.exports.help = {
    name: "help"
}
