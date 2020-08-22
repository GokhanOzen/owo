const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`<a:hogel:738683113051389992> Beter Ekstra Menüsü`).then(msg=>{
	const fc = new Discord.MessageEmbed()
  .setTitle('<a:hogel:738683113051389992> Beter Ekstra Menüsü')
  .setDescription('<a:right:735963461246517389> **,davet** (Davet linkini gösterir) **,destek** (Destek için gerekenleri gösterir)')
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
	name: 'ekstra',
	description: '',
	usage: ''
}