const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    // Error windows
    let errname = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Please, set a new server\'s name.');

    let erruser = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('You have no rights to change the server\'s name.');

    let errbot = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('I have no rights to change the server\'s name.');
    
    // Checking errors
    if (!args.join(' ')) return msg.channel.send(errname);

    if(!msg.member.hasPermission('MANAGE_GUILD')) return msg.channel.send(erruser);
    if (!msg.guild.me.hasPermission('MANAGE_GUILD')) return msg.channel.send(errbot);

    // Setting name
    msg.guild.setName(args.join(' '));

    let guildName = msg.guild.name;
    let authorName = msg.author.username;

    // Success message
    let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Sucessfully changed the name of the server!")
        .setDescription(`**${authorName}** decided to rename this server!`)
        .addField('Previous name:', `\`${guildName}\``);

    msg.channel.send(embed);
    return;
    
};

module.exports.help = {
    name: "name"
};