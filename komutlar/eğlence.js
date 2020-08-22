const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`<a:hogel:738683113051389992> Eğlence Menüsü`).then(msg=>{
	const fc = new Discord.MessageEmbed()
  .setTitle('<a:hogel:738683113051389992> Beter Eğlence Menüsü')
  .setDescription('<a:dance4:735440698861551628> **,yazı** (Yazdığınız yazıyı ascii formatına çevirir) **,rastgele** (Rastgele birini seçer)\n\n<a:dance4:735440698861551628> **,phyazı** (Yazıyı Porn Hub stiline çevirir) **,resimyazı** (Siyah arkaplan ekler)\n\n<a:dance4:735440698861551628> **,yazıtura** (Yazı/Tura atar)\n')
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
	name: 'eğlence',
	description: '',
	usage: ''
}