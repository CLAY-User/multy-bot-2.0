const Discord = require("discord.js");
const { memeAsync } = require('memejs');

module.exports.run = async (bot, msg, args) =>
{

    let err = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Please, specify a name of a subreddit.');

    let subreddit = args[0];
    if(!subreddit) return msg.channel.send(err);

    let wait = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Wait!')
        .setDescription(`Searching for a random post from ${args[0]}`);

    msg.channel.send(wait).then(msg => {
      msg.delete({ timeout: 3000 })
    });

    memeAsync(`${args[0]}`)
    .then(m => {
    
      let title = m.title;
      let img = m.url;

      let result = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setAuthor(title, 'https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/004/762/original/1200px-Reddit_logo_orange.svg.png?1584929081')
        .setImage(img)
        .setTimestamp();

      msg.channel.send({embed: result}).then(function (message) {
        message.react("👍🏻")
        message.react("👎🏻")
        
    });;

    })
    .catch(e => {

    let error = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Reason: ' + e);
    

      msg.channel.send(error);

    })

};

module.exports.help = {
    name: "reddit"
};