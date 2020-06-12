const Discord = require("discord.js");


module.exports.run = async (bot, msg, args) =>
{

    let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Something went wrong...');

    let request = args.join(' ').replace(/ /gi, '%20');

    if(!request) return msg.channel.send(embed);

    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${request}`;

    if(!url) return msg.channel.send(embed);

    let result = new Discord.MessageEmbed()
        .setColor('')
        .setTitle('Your QR-code')
        .setImage(url)
        .setTimestamp();

    msg.channel.send(result);

};

module.exports.help = {
    name: "qr"
};