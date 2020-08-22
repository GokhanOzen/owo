const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`**<a:200iq:735440717194854411> Davet Menüsü**`).then(msg=>{
	const fc = new Discord.MessageEmbed()
	.setTitle('<a:200iq:735440717194854411> **Davet Menüsü**')
   .setDescription('**Davet linkim** [Davet Linki İçin](https://discord.com/oauth2/authorize?client_id=708413383451344936&scope=bot&permissions=0?) \n**Destek sunucusuna gelebilirisin** [Destek Sunucusu İçin](https://discord.gg/AgHu7N)')
	.setColor('RANDOM')
	msg.edit(fc);
	msg.edit("\u200B")
	
})
                                                       }

exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'davet',
	description: '',
	usage: ''
}