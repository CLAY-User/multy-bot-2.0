const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    /* let log = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setTitle('Changelog [3]')
        .addField('Changes', '`All js files`')
        .addField('New JS files', '`addrole.js, advice.js, ass.js, art.js, botinfo.js, covid.js, mute.js, removerole.js, reverse.js, whois.js, wiki.js`')
        .setTimestamp();

    if(msg.author.id !== '327814559777947678') return; */

    // msg.channel.send(msg.guild.members.cache.map(u=> `${u.user.toString()}`).join(", "));

    var users = msg.guild.members.cache.map(u => `${u.user.toString()}`);
    var array = Array.from(users);
    let rand = array[Math.floor(Math.random() * array.length)];
    msg.channel.send(rand);

};

module.exports.help = {
    name: "test"
};