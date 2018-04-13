const Discord = require("discord.js");
const stripIndents = require('common-tags').stripIndents;
const RichEmbed = require('discord.js').RichEmbed;
module.exports.run = async (client, message, args) => {
                let embed = new Discord.RichEmbed()
                .addField('Ascii Font List', stripIndents`
                **Part 1:**\n3-d\n3x5\n5lineoblique\nacrobatic\nalligator\nalligator2`)
                .addField('Ascii Font List', stripIndents`
                **Part 2:**\nalphabet\navatar\nbanner\nbanner3-D\nbanner3\nbanner4`)
                .addField('Ascii Font List', stripIndents`
                **Part 3:**\nbarbwire\nbasic\nbell\nbig\nbigchief\nbinary`)
                .addField('Ascii Font List', stripIndents`
                **Part 4:**\nblock\nbubble\nbulbhead\ncalgphy2\ncaligraphy\ncatwalk`)
                .addField('Ascii Font List', stripIndents`
                **Part 5:**\nchunky\ncoinstak\ncolossal\ncomputer\ncontessa\ncontrast`)
                .addField('Ascii Font List', stripIndents`
                **Part 6:**\ncybersmall\ndiamond\ndigital\ndoh\ndoom\ndotmatrix`)
                .addField('Ascii Font List', stripIndents`
                **Part 7:**\ndrpepper\neftichess\neftifont\neftipiti\neftirobot\neftitalic`)
                .addField('Ascii Font List', stripIndents`
                **Part 8:**\neftiwall\neftiwater\nepic\nfender\nfourtops\nfuzzy`)
                .addField('Ascii Font List', stripIndents`
                **Part 9:**\ngoofy\ngothic\ngraffiti\nhollywood\ninvita\nisometric1`)
                .addField('Ascii Font List', stripIndents`
                **Part 10:**\nisometric2\nisometric3\nisometric4\nitalic\nivrit\njazmine`)
                .addField('Ascii Font List', stripIndents`
                **Part 11:**\njerusalem\nkatakana\nkban\nlarry3d\nlcd\nlean`)
                .addField('Ascii Font List', stripIndents`
                **Part 12:**\nletters\nlinux\nlockergnome\nmadrid\nmarquee\nmaxfour`)
                .addField('Ascii Font List', stripIndents`
                **Part 13:**\nmike\nmini\nmirror\nmnemonic\nmorse\nmoscow`)
                .addField('Ascii Font List', stripIndents`
                **Part 14:**\nnancyj-fancy\nnancyj-underlined\nnancyj\nnipples\nntgreek\no8\nogre`)
                .addField('Ascii Font List', stripIndents`
                **Part 15:**\npawp\npeaks\npebbles\npepper\npoison\npuffy`)
                .addField('Ascii Font List', stripIndents`
                **Part 16:**\npyramid\nrelief\nrelief2\nrev\nroman\nrot13`)
                .addField('Ascii Font List', stripIndents`
                **Part 17:**\nrounded\nrowancap\nrozzo\nrunic\nrunyc\nsblood`)
                .addField('Ascii Font List', stripIndents`
                **Part 18:**\nscript\nserifcap\nshadow\nshort\nslant\nslide`)
                .addField('Ascii Font List', stripIndents`
                **Part 19:**\nslscript\nsmall\nsmisome1\nsmkeyboard\nsmscript`)
                .addField('Ascii Font List', stripIndents`
                **Part 20:**\nsmshadow\nsmslant\nsmtengwar\nspeed\nstampatello\nstandard`)
                .addField('Ascii Font List', stripIndents`
                **Part 21:**\nstarwars\nstellar\nstop\nstraight\ntanja\ntengwar`)
                .addField('Ascii Font List', stripIndents`
                **Part 22:**\nterm\nthick\nthin\nthreepoint\nticks\nticksslant`)
                .addField('Ascii Font List', stripIndents`
                **Part 23:**\ntinker-toy\ntombstone\ntrek\ntsalagi\ntwopoint\nunivers`)
                .addField('Ascii Font List', stripIndents`
                **Part 24:**\ntinker-toy\ntombstone\ntrek\ntsalagi\ntwopoint\nunivers`);
                message.channel.send({embed: embed});
}

module.exports.help = {
    name: "ascii-list"
}
