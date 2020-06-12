const Discord = require("discord.js");
const config = require("./config.json");
const fs  = require("fs");
const bot = new Discord.Client();
const prefix = config.prefix;

let xp = require("./assets/xp.json");

// Bot turned on
bot.on("ready", async () => {

    // Gives you a respond
    console.log(`${bot.user.username} is ready for action!`);

    // Sets the status
    bot.user.setPresence({
        activity: {
            name: `commands | !help`,
            type: "LISTENING",
        },
        status: 'idle'
    });

    // Generates a link
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
    });

});

// Load commands
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0) return console.log('There are no commands to load!');

    console.log(`Loading ${jsfiles.length} commands...`);
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    })
});


// Commands input
bot.on('message', async msg => {

    // xp
    xpRandom(msg);


    // If the author of any sent message is a bot - does nothing
    if (msg.author.bot) return;

    // If person sent a message to DM - does nothing
    // old if (msg.channel.type === "dm") return;
    if (msg.guild === null) return;

    // Space
    let messageArray = msg.content.split(" ");

    // LowerCase means HeLp => help
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    // If there's no prefix - does nothing
    if (!command.startsWith(prefix)) return;

    // Structure
    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, msg, args);

})

// Message events
bot.on('message', msg => {

    if (msg.channel.id === '693026521971163166') {
        msg.react('703093252437442600')
    }

    if (msg.channel.id === '717366046926962700') {

        if(msg.member.id !== '707479905058947072') return msg.delete();

    }

});

// Thanks for invite
bot.on('guildCreate', guild => {

    let welcome = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setTitle('Thank you for inviting me!')
        .setDescription('This bot has a lot of features that you can use in your server.\nUse `!help` command to find out a lot about opportunities of this bot.\n Have a nice day!\n\n#manage #music #fun')
        .setTimestamp()
        .setFooter('Multy', 'https://cdn.discordapp.com/avatars/707479905058947072/5f47eb44ba2af06b6818003215c2dade.webp');

    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send(welcome)

})

function xpRandom(msg){

    //** XP Stuff **/
    if(msg.author.bot)
    {
        return;
    }
    else
    {
    let xpAdd = Math.floor(Math.random() * 7) + 8;
  
    //reading from xp.json, if not found create entry
    if(!xp[msg.author.id]){
      xp[msg.author.id] = {
        xp: 0,
        level: 1
      };
    }
  
    let curxp = xp[msg.author.id].xp;
    let curlvl = xp[msg.author.id].level;
    let nxtLvl = Math.ceil(Math.sqrt(Math.abs(xp[msg.author.id].level))) * 300;
    xp[msg.author.id].xp =  curxp + xpAdd;
  
    if(nxtLvl <= xp[msg.author.id].xp){
      xp[msg.author.id].level = curlvl + 1;
      let lvlup = new Discord.MessageEmbed()
      .setTitle("Level Up!")
      .setColor("DARK_BLUE")
      .addField("New Level", curlvl + 1)
      .setTimestamp();
  
      msg.channel.send(lvlup).then(msg => {
        msg.delete({ timeout: 3000 })
      });
    }
  
    fs.writeFile("./assets/xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
    });
    return void(0);
}
}

// Log in
bot.login(process.env.TOKEN);
