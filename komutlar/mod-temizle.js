const Discord = require('discord.js');

exports.run = function(client, message, args) {
  const sayi = args.slice(0).join('');
 
if(sayi.length < 1) {
  return message.reply("Silmem İçin Bir Miktar Belirt")
 
} else {
  message.channel.bulkDelete(sayi);
 
message.channel.send("**Eylem: ** Mesaj Silme\n**Kaç Adet: **" + sayi + "\n**Sonuç: ** Başarılı")
  message.delete()
    .then(msg => {
        msg.delete(5000)
});
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 2
};
exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle'
};
