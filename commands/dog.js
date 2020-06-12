const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, msg, args) =>
{

    let error = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Error!')
    .setDescription('Something went wrong, check logs...');

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)

    if(!{body}) return msg.channel.send(error);

    let result = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Dog')
        .setImage(body.message)
        .setTimestamp();
        
    msg.channel.send({embed: result}).then(function (message) {
        message.react("👍🏻")
        message.react("👎🏻")
    });

};

module.exports.help = {
    name: "dog"
};