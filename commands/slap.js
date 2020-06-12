const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('You should choose whom to slap.');

    if(!args[0]) return msg.channel.send(embed);

    let user = args[0];
    const responses = [`You're not leaving him a choice, ${user}. ${msg.author.toString()} slapped you! 👋🏻`, `Sweet dreams, ${user}! Get you slap 👋🏻`, `It was so unexpected! ${msg.author.toString()} slapped ${user}'s face! 👋🏻`];
    const answer = responses[Math.floor(Math.random() * responses.length)]

    msg.channel.send(answer);

};

module.exports.help = {
    name: "slap"
};