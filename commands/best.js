const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports.run = async (bot, msg, args) =>
{

    if (talkedRecently.has(msg.guild.id)) 
    {

        let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Do not be in hurry!')
            .setDescription('You can use this command only once a day.')

        msg.channel.send(embed);

    } 
    else 
    {

        var users = msg.guild.members.cache.map(u => `${u.user.toString()}`);
        var array = Array.from(users);
        let rand = array[Math.floor(Math.random() * array.length)];

        let embed = new Discord.MessageEmbed()
            .setColor('DARK_BLUE')
            .setTitle('Congratulations!')
            .setDescription(`The best user of this server today: ${rand}. Congrats to you!`)
        
        msg.channel.send(embed);

        talkedRecently.add(msg.guild.id);
        setTimeout(() => {
        talkedRecently.delete(msg.guild.id);
            }, 86400000);

}

};

module.exports.help = {
    name: "best"
};
