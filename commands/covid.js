const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, msg, args) =>
{

	let err = new Discord.MessageEmbed()
		.setColor('RED')
		.setTitle(`Error!`)
		.setDescription('Something went wrong...')

    var options = {
        'method': 'GET',
        'url': 'https://api.covid19api.com/summary',
        'headers': {
        }
        };

    request(options, function (error, response) { 
        if (error) throw msg.channel.send(err);

            var obj = JSON.parse(response.body);

            let newdeaths = obj.Global.NewDeaths;
            let newconf = obj.Global.NewConfirmed;
            let newrec = obj.Global.NewRecovered;

            let totaldeaths = obj.Global.TotalDeaths;
            let totalconf = obj.Global.TotalConfirmed;
            let totalrec = obj.Global.TotalRecovered;

            let result = new Discord.MessageEmbed()
                .setColor('DARK_BLUE')
                .setTitle('COVID-19 Information')
                .setThumbnail('https://cdn.dribbble.com/users/2889075/screenshots/11012982/media/8af3d07874451182aa3b44172ecd3671.gif')
                .addField(':skull_crossbones: New Deaths', `${newdeaths}`, true)
                .addField(':microbe: New Confirmed', `${newconf}`, true)
                .addField(':adhesive_bandage: New Recovered', `${newrec}`, true)
                .addField(':red_square: Total Deaths', `${totaldeaths}`, true)
                .addField(':red_square: Total Confirmed', `${totalconf}`, true)
                .addField(':green_square: Total Recovered', `${totalrec}`, true)
                .setTimestamp()

            msg.channel.send(result);
            
          });

}


module.exports.help = {
    name: "covid"
};