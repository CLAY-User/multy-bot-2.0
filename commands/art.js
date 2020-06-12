const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, msg, args) =>
{

    let error = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Error!')
    .setDescription('Something went wrong, check logs...');

    if(!args.join(' ')) return msg.channel.send(error);

    let arg = args.join(' ');

    let {text} = await superagent
    .get(`http://artii.herokuapp.com/make?text=${arg}`)

    if(!{text}) return msg.channel.send(error);

    msg.channel.send('```' + text + '```');

};

module.exports.help = {
    name: "art"
};