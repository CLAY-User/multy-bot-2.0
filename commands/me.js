const Discord = require("discord.js");


module.exports.run = async (bot, msg, args) =>
{

    let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Error!')
        .setDescription('Something went wrong...');

    // let usera = msg.author;
    let statusme = msg.member.presence !== null && msg.member.presence.status !== null ? msg.member.presence.status : "Offline";
    // let gameName = usera.presence.game ? usera.presence.game.name : "None";
    const onlinestat = {
        "online": "Online",
        "idle": "Idle",
        "dnd": "Do not distrub",
        "offline": "Offline"
      }

    let result = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setThumbnail(msg.author.avatarURL())
        .addField("Username ", `${msg.author.tag}`)
        .addField("Status", onlinestat[msg.member.presence.status])
        // .addField("Playing ", `${gameName}`, true)
        // .addField("Playing ", `${msg.author.presence.game === null ? msg.author.presence.game.name : "None"}`, true)
        .addField("Playing", `${msg.author.presence.game ? `🎮 ${msg.author.presence.game.name}` : "Nothing"}`)
        .addField("Nickname ", `${msg.member.displayName}`)
        .addField("Role(s) ", `${msg.member.roles.cache.map(r => r.name).join(", ")}`)
        // .addField("Highest Role ", msg.member.highestRole.name)
        .addField("Joined Guild On ", `${msg.member.joinedAt.toDateString()}`)
        .addField("Joined Discord On ", `${msg.author.createdAt.toDateString()}`)
        .setTimestamp()
        .setFooter(`ID: ${msg.author.id}`);

    msg.channel.send(result);

};

module.exports.help = {
    name: "me"
};