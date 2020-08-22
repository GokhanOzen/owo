const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = '<a:dnd:742107815560085624> Rahatsız Etmeyin';
    if (member.presence.status === 'online') member.presence.status = '<a:online:742107802402554007> Aktif';
    if (member.presence.status === 'idle') member.presence.status = '<a:idle:742107787693391882> Boşta';
    if (member.presence.status === 'offline') member.presence.status = '<a:dikkat:738116899174613174> Çevrimdışı';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor('RANDOM')
    .setImage(member.user.displayAvatarURL())
    .addField("<a:burda:742305221660901408> İD'si", member.id)
    .addField('<a:burda:742305221660901408> Rolleri', `<@&${member._roles.join('> <@&')}>`)
    .addField("<a:burda:742305221660901408> Hesap açma tarihi", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField('<a:burda:742305221660901408> Sunucuya katılma tarihi', `${joineddate} \n> ${joined} day(S) Ago`)
    .addField("<a:burda:742305221660901408> Durumu", status)

    message.channel.send(userEmbed);
}

module.exports.config = {
    name: "kullanıcı",
    description: "Shows the information of a member/user",
    usage: "?memberinfo",
    accessableby: "Members",
    aliases: ['userinfo']
}
exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'kullanıcı',
    description: 'frenzycode',
    usage: 'frenzycode'
}