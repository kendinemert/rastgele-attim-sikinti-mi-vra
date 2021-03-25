const Discord = require('discord.js')

exports.run = function(client, message, args) {
  const afk = new Discord.MessageEmbed()
  .setColor('FF000')
  .setTitle('Botun **SAHİBİ** Altta Yer Almaktadır')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`**Beni Yaptığı Ve Oluşturdu İçin Teşekkür Ederim\n<@704951804399452171>**`)
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["owner"],
  permLevel: 0
};
 
exports.help = {
  name: 'sahip',
  description: 'afk komutu',
  usage: 'sahip'
};