const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>
{

    let hello = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Please, specify a user.')

    if(!args[0]) return msg.channel.send(hello);

    const onlinestat = {
        "online": "Online",
        "idle": "Idle",
        "dnd": "Do not distrub",
        "offline": "Offline"
      }
    let member = msg.mentions.members.first();
    let avatar = msg.mentions.users.first();

    let embed = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setThumbnail(avatar.displayAvatarURL())
        .addField("Username ", `${member.user.tag}`)
        .addField("Status", onlinestat[member.presence.status])
        .addField("Playing ", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Nothing"}`)
        .addField("Nickname ", `${member.displayName}`)
        .addField("Role(s) ", `${member.roles.cache.map(r => r.name).join(", ")}`)
        // .addField("Highest Role ", member.highestRole.name)
        .addField("Joined Guild On ", `${member.joinedAt.toDateString()}`)
        .addField("Joined Discord On ", `${member.user.createdAt.toDateString()}`)
        .setTimestamp()
        .setFooter(`ID: ${msg.author.id}`);
        msg.channel.send(embed);

};

module.exports.help = {
    name: "whois"
};