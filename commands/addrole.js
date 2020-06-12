const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, msg, args) =>
{

    let perm = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('You don\'t have rights to use this command.')

    let us = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Please, specify a user.')

    let norole = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Please, specify a role.')

    let hasrole = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('This user has this role.')

    if(!msg.member.hasPermission("MANAGE_ROLES")) return msg.channel.send(perm);
    let usern = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0]);
    if(!usern) return msg.channel.send(us);
          
    let role = args.slice(1).join(' ')
    if(!role) return msg.channel.send(norole);
    let gRole = msg.guild.roles.cache.find(r => r.name == role);
    let nonorole = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription(`There's no **${role}** role.`)
    if(!gRole) return msg.channel.send(nonorole);
          
    if(usern.roles.cache.has(gRole.id)) return msg.channel.send(hasrole);
    await(usern.roles.add(gRole.id));

    let success = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Success!')
        .setDescription(`Successfully gave ${usern.toString()} the ${gRole.name} role!`)

    await msg.channel.send(success)
          
    msg.delete();

};

module.exports.help = {
    name: "addrole"
};