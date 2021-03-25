const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("=-------------------------------------------------------=")
  .setDescription('**🇹🇷Koruma Menü🇹🇷**')
  .setColor("#ff0000")
  .addField("<a:versionok:762367652541759488> **f!everhere-engel aç/kapat**","**Sunucunuzda Everyone & Here Engelleyin.** ",)
  .addField("<a:versionok:762367652541759488> **f!küfür-engel aç/kapat**", " ** Sunucunuzda Küfür Engellemeyi Açın Veya Kapayın.** ",)
  .addField("<a:versionok:762367652541759488> **f!reklam-engel aç/kapa**", " **Reklam Engel Açın Veya Kapayın.** ",)
  .addField("<a:versionok:762367652541759488> **f!ban-sistem**", "**Ban Sistemi Komutları Listeler.** ",)
  .addField("<a:versionok:762367652541759488> **f!kick-sistem**", "**Kick Sistemi Komutları Listeler.** ",)
  
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
  aliases: ["koruma" , "Korumalar"],
  permLevel: 0
};

exports.help = {
  name: 'koruma',
  description: 'Tüm komutları gösterir.',
  usage: 'koruma'
};