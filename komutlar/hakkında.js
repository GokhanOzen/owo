const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

           message.channel.send(`🎻 Beter Hakkında`).then(msg=>{
        const fc = new Discord.MessageEmbed()
        .setTitle('🎻 Beter Hakkında')
       .setDescription('Yakında')
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
	name: 'hakkında',
	description: '',
	usage: ''
}