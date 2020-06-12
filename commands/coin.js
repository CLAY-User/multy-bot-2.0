const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{


    let num = (Math.floor(Math.random()*2)+1);

    if(num == 1)
    {
        let embed1 = new Discord.MessageEmbed()
            .setColor('DARK_BLUE')
            .setTitle('Heads')
            .setImage('https://cdn.discordapp.com/attachments/718067802635763782/720908815620636723/heads.png');
        msg.channel.send(embed1);

    }
    else
    {
        let embed2 = new Discord.MessageEmbed()
            .setColor('DARK_BLUE')
            .setTitle('Tails')
            .setImage('https://cdn.discordapp.com/attachments/718067802635763782/720908816752967720/tails.png');
        msg.channel.send(embed2);

    }

};

module.exports.help = {
    name: "coin"
};