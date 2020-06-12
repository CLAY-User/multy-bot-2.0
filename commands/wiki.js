const Discord = require('discord.js');
var request = require('request');


module.exports.run = async (bot, msg, args) =>
{

    if(!args.join(' ')) return msg.channel.send('Specify your request!');
    var query = args.join(' ');
    var url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&format=json`;

    request(url, function (err, response, body) {

    if(err)
    {

        let err = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Error!')
            .setTitle('Something went wrong...');
        msg.channel.send(err);

    } 
    else 
    {

        var wiki = JSON.parse(body);
        for (var i = 0; i < 1; i++) {
        var result = new Discord.MessageEmbed()
            .setColor('DARK_BLUE')
            .setTitle(`Your request: ${wiki[1][i]}`)
            .addField(`_From Wikipedia, the free encyclopedia_`, `Read: ${wiki[3][i]}` + '\n');
        msg.channel.send(result);
        }

    }
    });

};

module.exports.help = {
    name: "wiki"
};