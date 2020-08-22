const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
let yazıfrenzy = args[0]
let yzıfrenzy = args[1]
if (!yazıfrenzy || !yzıfrenzy) return message.channel.send(`Lütfen 2 kelime yazınız!`)
let Frenzy_attachment = `https://api.alexflipnote.dev/pornhub?text=${yazıfrenzy}&text2=${yzıfrenzy}`
message.channel.send({
	files: [{
		attachment: Frenzy_attachment,
		name: 'img.png'
	}]
 });
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'phyazı',
  description: '',
  usage: ''
};