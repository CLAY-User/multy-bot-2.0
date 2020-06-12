const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('You should choose whom to kiss.');

    if(!args[0]) return msg.channel.send(embed);

    let user = args[0];
    const responses = [`${msg.author.toString()} kissed ${user}, so cute 😊`, `${user} has been kissed by ${msg.author.toString()} 💋`, `Getting hot! ${msg.author.toString()} decided to kiss ${user} 😍`];
    const answer = responses[Math.floor(Math.random() * responses.length)]

    msg.channel.send(answer);

};

module.exports.help = {
    name: "kiss"
};