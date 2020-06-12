const Discord = require("discord.js");


module.exports.run = async (bot, msg, args) =>
{

    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error!")
        .setDescription("**You're not my admin!**")

    let report = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Report')
        .addField('Result', `**${bot.user.username}** has been turned off!`)

    if (msg.author.id !== "327814559777947678") return msg.channel.send(embed);

    function offBot(channel) {
        channel.send('**Goodbye...** :sleeping: ')
        bot.channels.cache.get('717366046926962700').send(report)
        .then(msg => bot.destroy())
    }

    offBot(msg.channel);

};

module.exports.help = {
    name: "kill"
};