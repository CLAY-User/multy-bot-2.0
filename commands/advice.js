const Discord = require('discord.js');
var superagent = require('superagent');


module.exports.run = async (bot, msg, args) =>
{

    let body = await superagent
    .get(`https://api.adviceslip.com/advice`)

    if(!body) return msg.channel.send(error);

    var obj = JSON.parse(body.text);

    msg.channel.send('_' + obj.slip.advice + '_');

};

module.exports.help = {
    name: "advice"
};