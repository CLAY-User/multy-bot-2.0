const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    let usererr = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Please, specify the user.');

    let reasonerr = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Please, specify the reason.');
    
    let youerr = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('You have no rights to do that.');
    
    let meerr = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('I have no rights to do that.');

    let user = args[0];
    let rMember = (msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));
    let reason = args.join(" ").slice(22);

    if(msg.author.bot) return;
    if(!user) return msg.channel.send(usererr);
    if(!reason) return msg.channel.send(reasonerr);
    if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(youerr);
    if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send(meerr);

    let success = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Successfully reported!');

    msg.delete({ timeout: 10000 })
    msg.channel.send(success).then(msg => {
        msg.delete({ timeout: 10000 })
    });

    let reportresult = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setTitle('Report')
        .addField("Reported User", `${user}\nID: ${rMember.id}`, true)
        .addField("Reported By", `${msg.author}\nID: ${msg.author.id}`, true)
        .addField("Channel", msg.channel)
        .addField("Reason", reason)
        .setTimestamp();

    bot.channels.cache.get('717366046926962700').send(reportresult);
    bot.channels.cache.get('718132961891057806').send(reportresult);

};

module.exports.help = {
    name: "report"
};