const Discord = require('discord.js');
exports.run = async (client, message, args) => {
       var flip = Math.floor(Math.random() * 2 + 1);
       if (flip === 1) {
    let book = new Discord.MessageEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
   .setImage('https://cdn.discordapp.com/attachments/358322476167462914/366966782252023808/1503472_o8efa.png')
   message.channel.send(book);
 }
       
       else {
    let boom = new Discord.MessageEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
   .setImage('https://cdn.discordapp.com/attachments/358322476167462914/366966718486282240/1TL_reverse.png')
   message.channel.send(boom);
 } 
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'yazıtura'
};