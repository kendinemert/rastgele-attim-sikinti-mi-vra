const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("=-------------------------------------------------------=")
  .setDescription('**🇹🇷KULLANICI MENÜ🇹🇷**')
  .setColor("#ff0000")
  .addField("<a:versionok:762367652541759488> **f!afk**" , " **AFK Olursunuz** ")
  
  .addField("<a:versionok:762367652541759488> **f!davet**", " ** Botu Davet Etmenizi Sağlar** ",)
  
  .addField("<a:versionok:762367652541759488> **f!kullanıcı-bilgi**", " **Kullanıcı Hakkında Bilgi Alın**",)
  
  .addField("<a:versionok:762367652541759488> **f!ping**", " **Botun Pingini Gösterir**",)
  
  .addField("<a:versionok:762367652541759488> **f!rol-bilgi**", " **Rol Hakkında Bilgi Alırsınız**",)
  
  .addField("<a:versionok:762367652541759488> **f!yetkilerim**", " **Kullandığınız Sunucudaki Yetkileriniz**",)
  
  .addField("<a:versionok:762367652541759488> **f!sunucu-bilgi**", " **Kullandığınız Sunucunun Bilgilerini Gösterir**",)
  
  .addField("<a:versionok:762367652541759488> **f!say**", " **Sunucudaki Erkek Ve Kadın Üyeleri Sayın**",)

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
  aliases: ["kullanıcı"],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'kullanıcı'
};