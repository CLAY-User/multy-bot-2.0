const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    };

    let target = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));

    if (!target)
    {
    let result = getRandomInt(101);
    msg.channel.send(`Congrats! You're **${result}%** gay, ${msg.author.toString()} :rainbow_flag:`);
    }
    else
    {
    let result = getRandomInt(101);
    msg.channel.send(`Congrats! **${target}** is **${result}%** gay :rainbow_flag:`);
    }
    
};

module.exports.help = {
    name: "gay"
};