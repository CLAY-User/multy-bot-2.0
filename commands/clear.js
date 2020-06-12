const Discord = require("discord.js");


module.exports.run = async (bot, msg, args) =>
{

    let permission = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error!")
        .setDescription("You have no permission to do that.");

    let number = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error!")
        .setDescription("Please, specify the number of messages I have to delete.");

    let success = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Success!')
        .setDescription(`Succesfully deleted ${args[0]} messages.`);

    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(permission);
    if(!args[0]) return msg.channel.send(number).then(msg => msg.delete({ timeout: 5000 }));
        msg.channel.bulkDelete(args[0]).then(() => {
        msg.channel.send(success).then(msg => msg.delete({ timeout: 5000 }));
    });

};

module.exports.help = {
    name: "clear"
};