const Discord = require("discord.js");
const fs  = require("fs");

module.exports.run = async (bot, msg, args) =>
{

    fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

     let { version } = require("discord.js");
     
     let totalSeconds = (bot.uptime / 1000);
     let days = Math.floor(totalSeconds / 86400);
     let hours = Math.floor(totalSeconds / 3600);
     totalSeconds %= 3600;
     let minutes = Math.floor(totalSeconds / 60);

      let embedStats = new Discord.MessageEmbed()
        .setTitle("Stats")
        .setColor("DARK_BLUE")
        .setThumbnail('https://cdn.discordapp.com/avatars/707479905058947072/5f47eb44ba2af06b6818003215c2dade.webp')
        .addField("Uptime ", `${days}d ${hours}h ${minutes}m`, true)
        .addField("Users", `${bot.users.cache.size}`, true)
        .addField("Servers", `${bot.guilds.cache.size}`, true)
        .addField("Channels ", `${bot.channels.cache.size}`, true)
        .addField("Discord.js", `v${version}`, true)
        .addField("Commands", `${jsfiles.length}`, true)
        .setTimestamp()
        .setFooter("Multy");

     msg.channel.send(embedStats)
    })
    
};

module.exports.help = {
    name: "botinfo"
};