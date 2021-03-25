
const Discord = require('discord.js')
exports.run = async(client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ Hop Yetkin Yok Geri Bas.");
   }
    if (!args[0]) return message.channel.send("Bir Kullanıcı ID Girmelisin <a:unlem:779000690251923458>");
    let kisi = args[0];
    message.guild.members.ban(kisi).then(() => {
        message.channel.send(`${kisi} ID'li kullanıcı başarıyla banlandı.`)
    
    }).catch(err => {
        message.channel.send("Bir hata oluştu.Böyle bir kişi yok");
    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['force-ban'],
  permLevel: 0
};

exports.help = {
  name: 'forceban',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};