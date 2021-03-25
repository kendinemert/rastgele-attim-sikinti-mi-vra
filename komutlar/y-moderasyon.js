const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("=-------------------------------------------------------=")
  .setDescription('<a:alarm:782196892775874571> **Yetkili Komutlar** <a:alarm:782196892775874571>')
  .addField("<a:versionok:762367652541759488> **f!çek**", " **Belirttiğiniz Kullanıcıyı Size Çeker**")
  .addField("<a:versionok:762367652541759488> **f!mod-log**", " **Sunucunun Denetim Kaydını Tutar** ")
  .addField("<a:versionok:762367652541759488> **f!rol-al**", " **Birinden Bir Rol Alırsınız**")
  .addField("<a:versionok:762367652541759488> **f!rol-ver**", " **Birine Bir Rol Verirsiniz**")
  .addField("<a:versionok:762367652541759488> **f!uyarı**", " **Birine Uyarı Verirsiniz**")
  .addField("<a:versionok:762367652541759488> **f!uyarılar**", " **Birinin Uyarılarına Bakarsınız**")
  .addField("<a:versionok:762367652541759488> **f!slowmode**", " **Kullandığınız Kanalın Yavaş Modunu Ayarlayın!**")
  .addField("<a:versionok:762367652541759488> **f!sil**", " **100 Kadar Mesaj Silebilirsiniz**",)
  .addField("<a:versionok:762367652541759488> **f!isim-değiştir**" , " **Etiketlediğiniz Kişinin İsmini Değiştirin**")
  .addField("<a:versionok:762367652541759488> **f!sa-as**", " **Bunun Sayesinde Biri Sa Yada Başka Bişe Yazarsa As Yazar**")
  .setColor("#ff0000")
  .setFooter('FAKON ©2021 Tüm Haklar Saklıdır.\n=----------------------------------------------------------------=')
  .setImage("https://cdn.discordapp.com/attachments/785214462827167804/795868780571787284/standard-1.gif",)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mod", "yetkili"],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'moderasyon'
};