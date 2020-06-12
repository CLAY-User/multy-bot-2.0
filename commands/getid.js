const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    if(!args[0]) 
    {

        let myid = msg.author.id;
        msg.channel.send(`Your ID: \`${myid}\``);

    }
    else
    {

        let rMember = (msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));
        msg.channel.send(`ID: \`${rMember.id}\``);

    }
    
};

module.exports.help = {
    name: "getid"
};