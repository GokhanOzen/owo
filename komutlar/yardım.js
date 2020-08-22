const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`<a:hogel:738683113051389992> Yardım Menüsü`).then(msg=>{
	const fc = new Discord.MessageEmbed()
  .setTitle('<a:hogel:738683113051389992> Beter Yardım Menüsü')
  .setDescription('<a:burda:742305221660901408> **Eğlence Komutları İçin** ,eğlence\nEğlence için olan komutları gösterir\n\n<a:burda:742305221660901408> **Müzik Komutları İçin** ,müzik\nMüzik dinlemek için gerekli komutları gösterir\n\n<a:burda:742305221660901408> **Moderasyon Komutları İçin** ,moderasyon\nSunucunun düzenlenmesi için gereken komutları gösterir\n\n<a:burda:742305221660901408> **Premium Sistemi İçin** ,premium\n Premium komutları gösterir\n\n<a:burda:742305221660901408> **Ekstra Komutlar İçin** ,ekstra')
	.setColor('YELLOW')
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
	name: 'yardım',
	description: '',
	usage: ''
}