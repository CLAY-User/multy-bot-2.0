const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, msg, args) =>
{

    let error = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Error!')
    .setDescription('Something went wrong, check logs...');

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)

    if(!{body}) return msg.channel.send(error);

    let result = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Cat')
        .setImage(body.file)
        .setTimestamp();

    msg.channel.send({embed: result}).then(function (message) {
        message.react("👍🏻")
        message.react("👎🏻")
    });;

};

module.exports.help = {
    name: "cat"
};