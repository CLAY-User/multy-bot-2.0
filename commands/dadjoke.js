const Discord = require("discord.js");
const dadjokes = require("../assets/dadjokes.json");

module.exports.run = async (bot, msg, args) =>
{

    let joke = dadjokes[Math.floor(Math.random() * dadjokes.length)];
    /* let embed = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setTitle('Dad\'s joke')
        .setDescription(joke)
        .setTimestamp(); */

    msg.channel.send('_' + joke + '_');

};

module.exports.help = {
    name: "dadjoke"
};