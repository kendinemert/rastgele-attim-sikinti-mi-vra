const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Afferim Sana Usta Hacker')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/785214462827167804/809856123582546015/tenor.gif`)
    message.channel.send(sunucubilgi);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hackle"],
  permLevel: 0
};
exports.help = {
  name: 'hack',
  description: 'hack',
  usage: 'hack'
};