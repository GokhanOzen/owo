const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`**<a:200iq:735440717194854411> Sunucumuza Hoşgeldin**`).then(msg=>{
	const fc = new Discord.MessageEmbed()
	.setTitle('<a:200iq:735440717194854411> **Bot Ekleme Kuralları**')
   .setDescription('<a:ates:737420426887561237> **Senden tek bir isteğimiz kurallara uyman!**\n\n\n<a:right:735963461246517389> **Bot Eklemek İçin Botunuzun 10 Sunucuyu Geçmesi Gerek**\n\n<a:right:735963461246517389> **Botunuzda DM Duyuru Komutu Kesinlikle Olmamalıdır,**\n\n<a:right:735963461246517389> **Botunuz Saldırı Botu Toplu Ban Komudu Olmamalıdır,**\n\n<a:right:735963461246517389> **Botunuzda 3den Fazla Komut Çalışmazsa Botunuz Onaylanmaz,**\n\n<a:right:735963461246517389> **Botunuz Baktığımız Saatte Çevrimdışı İse Beklemeye Alınır\n\n<a:right:735963461246517389>** Çevrimiçi Olduğuna Bize Söylediğinizde Bakılır Uygunsa Onaylanır,** \n\n<a:right:735963461246517389> **Botunuzda Ailemiz,Top10, Gibi Komutlar Olursa Onaylanmaz!**\n\n@everyone @here')
	.setColor('RED')
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
	name: 'botlistkural',
	description: '',
	usage: ''
}