const Discord = require("discord.js");
const { memeAsync } = require('memejs');

module.exports.run = async (bot, msg, args) =>
{

    let wait = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Wait!')
    .setDescription('Searching a meme for you...');

    msg.channel.send(wait).then(msg => {
      msg.delete({ timeout: 3000 })
    });

    memeAsync('dankmemes')
    .then(m => {
    
      let title = m.title;
      let img = m.url;

      let result = new Discord.MessageEmbed()
      .setColor('ORANGE')
      .setAuthor(title, 'https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/004/762/original/1200px-Reddit_logo_orange.svg.png?1584929081')
      .setImage(img)
      .setTimestamp()
      .setFooter('Multy', 'https://cdn.discordapp.com/avatars/707479905058947072/5f47eb44ba2af06b6818003215c2dade.webp');

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
    name: "meme"
};