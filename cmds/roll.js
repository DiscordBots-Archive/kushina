const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let num = message.content.split(" ").slice(1);
  let [a1, a2] = num.join(" ").replace(/ /g, "").split("-");
  let str;
  if (!a2) {
    [a1, a2] = ["1", a1]
  }
  if (!a1) {
    [a1, a2] = ["1", "100"]
  }
 if (isNaN(a1) || isNaN(a2)) return message.reply("Please use numbers only.");
 message.reply('You rolled :game_die:' + parseInt(Math.floor(Math.random() * parseInt(a2)) + parseInt(a1))).then(m=>m.react('🎲'));
}

module.exports.help = {
    name: "roll"
}
