const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('I cannot repeat an empty message.');

    if(msg.author.bot) return;
    if(!args.join(' ')) return msg.channel.send(embed);

    let sentence = args.join(' ');

    msg.channel.send(sentence);

};

module.exports.help = {
    name: "say"
};