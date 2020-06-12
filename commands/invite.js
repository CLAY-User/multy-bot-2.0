const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    msg.channel.send('Here is a link to invite me to your server: https://discordapp.com/api/oauth2/authorize?client_id=707479905058947072&permissions=8&scope=bot');

};

module.exports.help = {
    name: "invite"
};