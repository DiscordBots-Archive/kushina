const Discord = require("discord.js");
var textArray = [
    "( ͡° ͜ʖ ͡°)",
    "(ಥ ͜ʖಥ)",
    "(° ͜ʖ°)",
    "(͡o‿O͡)",
    "( ‾ʖ̫‾)",
    "( ͡°(　　)",
    "͡° ͜ʖ ͡°",
    "(╯ຈل͜ຈ) ╯︵ ┻━┻",
    "(ノ͡° ͜ʖ ͡°)ノ︵┻┻",
    "༼ つ  ͡° ͜ʖ ͡° ༽つ",
    "(∩ ͡° ͜ʖ ͡°)⊃━✿✿✿✿✿✿",
    " ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ "
];
module.exports.run = async (client, message, args) => {
    var lenny = [Math.floor(Math.random() * textArray.length)]
    return message.channel.send(`${textArray[lenny]}`);
}

module.exports.help = {
    name: "lenny-face"
}
