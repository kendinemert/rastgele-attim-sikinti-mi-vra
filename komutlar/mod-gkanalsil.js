const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':x: Hoşgeldin kanalı silmek için `Yönetici` yetkisine sahip olman gerek.')

    db.delete(`gcc_${message.guild.id}`)

 
  message.channel.send(`<a:domates:799641748648493057> Hoşgeldin kanalı silindi.`)   
  message.react('617413726768988160')

};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ['resim-kanal-sil','gkanal-kapat','gkanal-sil'],
 permLevel: 3
};

exports.help = {
 name: 'gkanal-sil',
 description: 'Resimli hoşgeldeldin güle güle kanalı ayarlar.',
 usage: 'gkanal'
};