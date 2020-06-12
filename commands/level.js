const Discord = require("discord.js");
let xp = require("../assets/xp.json");

module.exports.run = async (bot, msg, args) =>
{

    if(!xp[msg.author.id]){
        xp[msg.author.id] = {
          xp: 0,
          level: 1
       };
     }

       let curxp = xp[msg.author.id].xp;
       let curlvl = xp[msg.author.id].level;
       let nxtLvlXp = curlvl * 300;
       let difference = nxtLvlXp - curxp;
     
       let lvlEmbed = new Discord.MessageEmbed()
       .setTitle('Level')
       .setThumbnail(msg.author.displayAvatarURL())
       .setColor('DARK_BLUE')
       .addField("Level", curlvl, true)
       .addField("XP", curxp, true)
       .setFooter(`${msg.author.username} | You need ${difference}XP to level up!`);
     
       msg.channel.send(lvlEmbed);

};

module.exports.help = {
    name: "level"
};