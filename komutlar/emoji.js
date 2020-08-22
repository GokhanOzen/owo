const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.cache.find(emoji => emoji.name === `${emojiname}`))
    if (!emojiname) return message.channel.send("Emoji ismi yazmalısın.")
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
    .addField("•Emojinin ismi", `${emojiname}`)
    .addField("•Emoji ID", `${emoji.id}`)
    .addField("•Link", `${emoji.url}`)
    .setTimestamp()
    message.channel.send(embed)
  console.log(emoji)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'emoji',
    description: '',
    usage: ''
}