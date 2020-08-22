const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`<a:hogel:738683113051389992> Beter Premium Menüsü`).then(msg=>{
	const fc = new Discord.MessageEmbed()
  .setTitle('<a:hogel:738683113051389992> Beter Premium Menüsü')
  .setDescription('<a:maden:735440600182161460> **Eklenecek** Eklenecek')
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
	name: 'premium',
	description: '',
	usage: ''
}