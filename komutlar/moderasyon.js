const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`<a:hogel:738683113051389992> Moderasyon Menüsü`).then(msg=>{
	const fc = new Discord.MessageEmbed()
  .setTitle('<a:hogel:738683113051389992> Beter Moderasyon Menüsü')
  .setDescription('<a:ates:737420426887561237> **,destek** (Destek komutlarını gösterir) **,kullanıcı** (Hakkında bilgi verir)\n\n<a:ates:737420426887561237> **,sil** (Belirtilen sayıda mesaj siler)\n\n<a:ates:737420426887561237> **,kural** (Sunucunuz için kurallar paylaşır)\n\n')
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
	name: 'moderasyon',
	description: '',
	usage: ''
}