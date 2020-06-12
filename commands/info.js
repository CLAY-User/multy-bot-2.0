const Discord = require("discord.js");
const dateFormat = require('dateformat');
const date = new Date();
dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM:ss TT');


module.exports.run = async (bot, msg, args) =>
{

    // gets guild's id
    var server = msg.guild.id;

    // works
    var list = bot.guilds.cache.get(server); 
    var users = list.memberCount; 

    // guild's name
    let guildName = msg.guild.name;

    // guild's avatar
    let attachment = msg.guild.iconURL();

    // guild's region
    // let region = msg.guild.region;

    // ver lvl
    const verlvl = {
        "NONE": ":white_circle: None",
        "LOW": ":green_circle: Low",
        "MEDIUM": ":yellow_circle: Medium",
        "HIGH": ":orange_circle: High",
        "HIGHEST": ":red_circle: Highest"
      }
    
    // regions
    const region = {
        "brazil": ":flag_br: Brazil",
        "europe": ":flag_eu: Europe",
        "hongkong": ":flag_hk: Hong Kong",
        "india": ":flag_in: India",
        "japan": ":flag_jp: Japan",
        "russia": ":flag_ru: Russia",
        "singapore": ":flag_sg: Singapore",
        "southafrica": ":flag_za:  South Africa",
        "sydney": ":flag_au: Sydney",
        "us-central": ":flag_us: U.S. Central",
        "us-east": ":flag_us: U.S. East",
        "us-west": ":flag_us: U.S. West",
        "us-south": ":flag_us: U.S. South",
      }

    // info embed
    let embed = new Discord.MessageEmbed()
    .setColor('DARK_BLUE')
    .setTitle("Information")
    .addFields(
        { name: 'Name', value: `${guildName}`, inline: true },
        { name: 'Owner', value: `${msg.guild.owner.user}`, inline: true  },
        { name: 'Members', value: `${users}`, inline: true  },
        { name: 'Region', value: region[msg.guild.region], inline: true  },
        { name: 'Verification Level', value: verlvl[msg.guild.verificationLevel], inline: true},
        { name: 'Text Channels', value: `${msg.guild.channels.cache.filter(m => m.type === 'text').size}`, inline: true  },
        { name: 'Voice Channels', value: `${msg.guild.channels.cache.filter(m => m.type === 'voice').size}`, inline: true  },
        { name: 'Roles', value: `${msg.guild.roles.cache.size}`, inline: true  },
        { name: 'Created On', value: `${msg.guild.createdAt.toDateString()}`, inline: true  }, // ${dateFormat(msg.guild.createdAt)}
    )
    .setThumbnail(attachment)
    .setTimestamp()
    .setFooter(`ID: ${msg.guild.id}`);

    msg.channel.send(embed);
    
};

module.exports.help = {
    name: "info"
};