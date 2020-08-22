const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`Ping Hesaplanıyor`).then(msg=>{
    const fc = new Discord.MessageEmbed()
        .setTitle('')
       .setDescription(`<a:tik1:735440589738475521> Pingim **${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms | **<a:ates:737420426887561237> Server Pingim** ${Math.round(client.ws.ping)}ms** \n<a:517396187393949697:699246110866407485>  **${client.guilds.cache.size}** Sunucu ve **${client.users.cache.size}** Kullanıcı!`)
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
	name: 'p',
	description: '',
	usage: ''
}