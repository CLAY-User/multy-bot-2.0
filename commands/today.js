const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, msg, args) =>
{

    let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Something went wrong.');

    let {body} = await superagent
    .get(`https://datazen.katren.ru/calendar/day/`)

    if(!{body}) return msg.channel.send(embed);
    
    let holiday = body.holiday;
    let date = body.date;

    if(holiday === false) {

        let result = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setTitle('Today\'s info')
        .addField('Holiday', `No`, true)
        .addField('Date', `${date}`, true)
        .setTimestamp();

        msg.channel.send(result);

    }
    else
    {

        let result = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setTitle('Today\'s info')
        .addField('Holiday', `Yes`, true)
        .addField('Date', `${date}`, true)
        .setTimestamp();

        msg.channel.send(result);

    }

};

module.exports.help = {
    name: "today"
};