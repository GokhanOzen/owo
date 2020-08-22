const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`<a:hogel:738683113051389992> Beter Müzik Menüsü`).then(msg=>{
	const fc = new Discord.MessageEmbed()
  .setTitle('<a:disco:699246114028912670> Beter Müzik Menüsü')
  .setDescription('<a:disco:699246114028912670> **Eklenecek** Eklenecek')
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
	name: 'müzik',
	description: '',
	usage: ''
}