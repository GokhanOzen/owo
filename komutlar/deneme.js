const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    msg.channel.send(`Ben şu an **${client.guilds.cache.size}** sunucuda **${client.users.cache.size}** kullanıcı ile sana hizmet veriyorum!`)   
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-kullanıcı',
  description: 'Botun bulunduğu sunucuları gösterir.',
  usage: ''
};