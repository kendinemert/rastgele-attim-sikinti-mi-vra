const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
let kanal = message.mentions.channels.first()
if(!kanal) {
  
const embed3 = new Discord.MessageEmbed()

.setDescription('HATA\nLütfen Bir Kanal Etiketle.** Örnek Kullanım :** **f!kayıt-kanal-ayarla #kanal**')
.setColor('RED')
  
return message.channel.send(embed3)
};
  
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
  
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription(`**Kayıt Kanal **#${kanal.name}** Olarak Ayarlandı.**\n\n**Not: Ayarladığınız Kanala Bot Yazamassa Mesaj Gitmez.**`)

message.channel.send(embed)
};
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-kanal-ayarla'],
  permLevel: 2
};

exports.help = {
  name: 'kayıt-kanal ayarla',
  description: 'Kayıt Sistemi İçin Yapılmıştır Code: Karanlık Bey#8631',
  usage: 'kayıt-kanal ayarla'
};