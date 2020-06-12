const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, msg, args) =>
{

        let spec = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Error!')
            .setDescription('Please, specify a user.')

        let perm = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Error!')
            .setDescription('Sorry, you don\'t have permissions to use this command.')

        let cant = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Error!')
            .setDescription('Sorry, I cannot mute this user.')

        let self = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Error!')
            .setDescription('You cannot mute yourself.')

        let timespec = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Error!')
            .setDescription('Please, specify a time I have to mute this user.')

        let usermute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));
        if(!usermute) return msg.channel.send(spec);
        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(perm);
        if(usermute.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(cant);
        if(usermute.id === msg.author.id) return msg.channel.send(self);
        let muterole = msg.guild.roles.cache.find(role => role.name === 'muted');
        let mutetime = args[1];
        if(!mutetime) return msg.channel.send(timespec);
      
        if(!muterole)
        {

            muterole = await msg.guild.roles.create({
                data: {
                    name: 'muted',
                    color: 'GREY',
                    permissions:[],
                      }
            })

        }
      
        let muted = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Muted!')
            .setDescription(`User ${usermute.toString()} has been muted for ${ms(ms(mutetime))}`)

        let unmuted = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Unmuted!')
            .setDescription(`User ${usermute.toString()} has been unmuted`)

        await(usermute.roles.add(muterole.id));
        msg.channel.send(muted);
      
        setTimeout(function(){
          usermute.roles.remove(muterole.id);
          msg.channel.send(unmuted);
        }, ms(mutetime));
      
        msg.delete();

};

module.exports.help = {
    name: "mute"
};