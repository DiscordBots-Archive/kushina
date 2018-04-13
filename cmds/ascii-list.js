const Discord = require("discord.js");
const stripIndents = require('common-tags').stripIndents;
const RichEmbed = require('discord.js').RichEmbed;
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
        .addField('Ascii Font List', stripIndents`
                **Ascii Font List:**\n3-d\n3x5\n5lineoblique\nacrobatic\nalligator\nalligator2\nalphabet\navatar\nbanner\nbanner3-D\nbanner3\nbanner4\nbarbwire\nbasic\nbell\nbig\nbigchief\nbinary\nblock\nbubble\nbulbhead\ncalgphy2\ncaligraphy\ncatwalk\nchunky\ncoinstak\ncolossal\ncomputer\ncontessa\ncontrast\ncosmic\ncosmike\ncricket\ncursive\ncyberlarge\ncybermedium\ncybersmall\ndiamond\ndigital\ndoh\ndoom\ndotmatrix\ndrpepper\neftichess\neftifont\neftipiti\neftirobot\neftitalic\neftiwall\neftiwater\nepic\nfender\nfourtops\nfuzzy\ngoofy\ngothic\ngraffiti\nhollywood\ninvita\nisometric1\nisometric2\nisometric3\nisometric4\nitalic\nivrit\njazmine\njerusalem\nkatakana\nkban\nlarry3d\nlcd\nlean\nletters\nlinux\nlockergnome\nmadrid\nmarquee\nmaxfour\nmike\nmini\nmirror\nmnemonic\nmorse\nmoscow\nnancyj-fancy\nnancyj-underlined\nnancyj\nnipples\nntgreek\no8\nogre\npawp\npeaks\npebbles\npepper\npoison\npuffy\npyramid\nrelief\nrelief2\nrev\nroman\nrot13\nrounded\nrowancap\nrozzo\nrunic\nrunyc\nsblood\nscript\nserifcap\nshadow\nshort\nslant\nslide\nslscript\nsmall\nsmisome1\nsmkeyboard\nsmscript\nsmshadow\nsmslant\nsmtengwar\nspeed\nstampatello\nstandard\nstarwars\nstellar\nstop\nstraight\ntanja\ntengwar\nterm\nthick\nthin\nthreepoint\nticks\nticksslant\ntinker-toy\ntombstone\ntrek\ntsalagi\ntwopoint\nunivers\nusaflag\nwavy\nweird`);
                message.channel.send({embed: embed});
}

module.exports.help = {
    name: "ascii-list"
}
