const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, msg, args) =>
{

	let cityname = new Discord.MessageEmbed()
		.setColor('RED')
		.setTitle(`Error!`)
		.setDescription('Please, specify a city name.')

    if(!args[0]) return msg.channel.send(cityname);

	var city = args.join(" ").toLowerCase();

	var options = {
		method: 'GET',
		url: 'https://community-open-weather-map.p.rapidapi.com/find',
		qs: {type: 'link%2C accurate', units: 'metric%2C metric', q: `${city}`},
		headers: {
		  'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
		  'x-rapidapi-key': '6be04e24f1msh1ee716a99325910p141bf3jsnb58086d35a6f',
		  useQueryString: true
		}
	  };

	  request(options, function (error, response, body) {

		let err = new Discord.MessageEmbed()
		.setColor('RED')
		.setAuthor(msg.guild.name, msg.guild.iconURL())
		.setTitle(`Something went wrong...`);

		  var obj = JSON.parse(body);

		  if (obj.list[0] == undefined) return msg.channel.send(err);

		  var celsius = JSON.stringify(obj.list[0].main.temp) - 273.15;
		  var fahrenheit = JSON.stringify(obj.list[0].main.temp) * 9/5 - 459.67;

		  var country = JSON.stringify(obj.list[0].sys.country).slice(1,3).toLowerCase();

		  let result = new Discord.MessageEmbed()
		  .setColor('')
		  .setAuthor(msg.guild.name, msg.guild.iconURL())
		  .setTitle(`Weather in ${args.join(" ")}`)
		  .addField('Celsius', Math.round(celsius) + '°C', true)
		  .addField('Fahrenheit', Math.round(fahrenheit) + '°F', true)
		  .addField('Country', `\:flag_${country}:`, true);
	
		msg.channel.send(result);

	  });

}


module.exports.help = {
    name: "weather"
};