const Discord = require("discord.js");


module.exports.run = async (bot, msg, args) =>
{
    if (args[0] === "me") return msg.channel.send("https://www.youtube.com/watch?v=oHg5SJYRHA0");

    let embed = new Discord.MessageEmbed()
    .setColor('DARK_BLUE')
    .setTitle("Multy bot (click to add)")
    .setURL('https://discordapp.com/api/oauth2/authorize?client_id=707479905058947072&permissions=8&scope=bot')
    .addFields(
        { name: 'Fun', value: '!gay\n!coin\n!cat\n!advice\n!dadjoke', inline: true },
        { name: '\u200B', value: '!dog\n!meme\n!say\n!ass\n!reddit', inline: true },
        { name: '\u200B', value: '!kiss\n!slap\n!art\n!reverse\n!best', inline: true },
    )
    .addFields(
        { name: 'Guild', value: '!info\n!clear\n!mute', inline: true },
        { name: '\u200B', value: '!ban\n!report\n!warn', inline: true },
        { name: '\u200B', value: '!addrole\n!removerole', inline: true },
    )
    .addFields(
        { name: 'User', value: '!avatar\n!me\n!getid', inline: true },
        { name: '\u200B', value: '!whois', inline: true },
        { name: '\u200B', value: '\u200B', inline: true },
    )
    .addFields(
        { name: 'Misc', value: '!qr\n!today\n!weather', inline: true },
        { name: '\u200B', value: '!nsfw\n!cc\n!wiki', inline: true },
        { name: '\u200B', value: '!covid', inline: true },
    )
    .addFields(
        { name: 'Bot', value: '!invite\n!uptime\n!botinfo' },
    )
    .addField("\u200B", "\n\n> The server's prefix: `!`\n> Usage example: `!cat`\n> Version: `2.0.0`")

    .setFooter("Made with ❤️ by softik#8376", 'https://cdn.discordapp.com/avatars/707479905058947072/5f47eb44ba2af06b6818003215c2dade.webp');

    msg.channel.send(embed);

};

module.exports.help = {
    name: "help"
};
