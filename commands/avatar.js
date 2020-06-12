const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{
    
    let target = msg.mentions.users.first() || msg.author;

    let embed = new Discord.MessageEmbed()
    .setColor("")
    .setTitle("Avatar")
    .setImage(target.displayAvatarURL());
    
    msg.channel.send(embed);

};

module.exports.help = {
    name: "avatar"
};