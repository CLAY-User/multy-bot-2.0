const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    if(!args.join(' ')) return msg.channel.send('I can\'t reverse an empty message.')
    msg.reply(args.join(' ').split('').reverse().join(''));
    
};

module.exports.help = {
    name: "reverse"
};