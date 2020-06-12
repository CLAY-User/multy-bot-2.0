const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, msg, args) =>
{

    try {

    let error = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Something went wrong, check logs...');

    let linkerr = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Please, provide a link.');

    let wait = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Wait!')
        .setDescription('Generating your link...');

    if(!args[0]) return msg.channel.send(linkerr);

    msg.channel.send(wait).then(msg => {
    msg.delete({ timeout: 4000 })
    });

    var link = args[0].toLowerCase().replace(/https:\/\/|http:\/\//gi, ' ');

    let {body} = await superagent
    .get(`https://api.shrtco.de/v2/shorten?url=${link}`)

    var result = body.result.short_link;

    if(!{body}) return msg.channel.send(error);

    let resembed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Successfully generated!')
        .setDescription('🔗 Here is your shorted link:')
        .addField('Copy:', `${result}`)

    msg.channel.send(resembed);

    }
    catch (err)
    {

        let error = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Invalid URL.');

        msg.channel.send(error)

    }

};

module.exports.help = {
    name: "cc"
};