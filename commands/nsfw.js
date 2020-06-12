const Discord = require('discord.js');
var superagent = require('superagent');


module.exports.run = async (bot, msg, args) =>
{

    let {body} = await superagent
    .get(`http://api.obutts.ru/butts/0/1/random`)

    if(!{body}) return msg.channel.send(error);

    let embed = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setTitle('NSFW')
        .setImage('http://media.obutts.ru/' + body[0].preview)
        .setTimestamp();

    msg.channel.send(embed);

};

module.exports.help = {
    name: "nsfw"
};