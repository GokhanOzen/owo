const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

           message.channel.send(`<a:Cyrus2:737310157490487338>  Destek Menüsü`).then(msg=>{
        const fc = new Discord.MessageEmbed()
        .setTitle('<a:Cyrus2:737310157490487338>  **Destek Menüsü**')
       .setDescription('**Destek almak için bana özelden dm atabilirsin** <@708413383451344936> \n**Destek sunucusuna gelebilirisin** [Destek Sunucusu İçin](https://discord.gg/AgHu7N)\n**Yapımcıya ulaşabilirsin** <@427159467352915970>')
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
	name: 'destek',
	description: '',
	usage: ''
}