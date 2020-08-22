const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`**<a:200iq:735440717194854411> Sunucumuza Hoşgeldin**`).then(msg=>{
	const fc = new Discord.MessageEmbed()
	.setTitle('<a:200iq:735440717194854411> **Sunucumuza Hoşgeldin**')
   .setDescription('<a:ates:737420426887561237> **Senden tek bir isteğimiz kurallara uyman!**\n\n\n<a:tik5:735440648513126472> **Küfür Kullanma**, İlk küfürde susturma, Ailevi küfürde perma ban yersin,\n\n<a:tik5:735440648513126472> **Reklam Yapma** Reklam yaparsan Perma banlanırsın,\n\n<a:tik5:735440648513126472> **Linkleri Link Odasında Paylaş** Aksi taktirde susturulursun,\n\n<a:tik5:735440648513126472> **İnsanları Rahatsız Edebilecek Şeyler Paylaşma** Eğer porno içerikli veya rahatsız edici görsel paylaşırsan ban yersin,\n\n<a:tik5:735440648513126472> **Özelden İnsanları Rahatsız Etme** Şikayet odasında kanıtı görülürse banlanırsın,\n\n<a:tik5:735440648513126472> **Admin ve Üstünü Rahatsız Etme** Gerekmedikçe rahatsız etmek ban sebebidir,\n\n\n<a:ates:737420426887561237>** Kurallara uyarsan çok iyi olur**,\n\n<a:hogel:738683113051389992> **İyi günler dilerim.**\n')
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
	name: 'kural',
	description: '',
	usage: ''
}