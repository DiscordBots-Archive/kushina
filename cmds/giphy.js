const giphy = require('giphy-api')('DbbYrAgkF6Y58RdOZNPzQAWjgygM0Iqn');
const fetchGifs = require('fetch-gifs');
const request = require('request');
const discord = require('Discord.js');
module.exports.run = async (client, message, args) => {
	var term = args.join(' ');
        term = encodeURI(term)
        request('http://api.giphy.com/v1/gifs/search?q=' + term + '&rating=r&api_key=dc6zaTOxFJmzC', function (error, response, body) {
              if (!error && response.statusCode == 200) {
            let content =  JSON.parse(body)
            let item = Math.floor(Math.random() * 10)
            let gif = content.data[item].images.fixed_height.url
            message.channel.send(`This gif was requested by: ${message.author.tag}\nSearch term: ${term}\nLink to gif: ${gif}`)
            console.log(`This gif was requested by: ${message.author.tag}\nSearch term: ${term}\nLink to gif: ${gif}`);
         }
        });
    
}

module.exports.help = {
    name: "giphy"
}
