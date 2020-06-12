const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) =>
{

    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);

    let embed = new Discord.MessageEmbed()
        .setTitle('Uptime result')
        .addFields(
          { name: 'Days', value: `${days}`, inline: true },
          { name: 'Hours', value: `${hours}`, inline: true },
          { name: 'Minutes', value: `${minutes}`, inline: true },
        );

    msg.channel.send(embed);

};

module.exports.help = {
    name: "uptime"
};