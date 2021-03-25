const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("=-------------------------------------------------------=")
  .setDescription('**🇹🇷Eğlence Komutları🇹🇷**')
  .setColor("#ff0000")
  
  .addField("<a:versionok:762367652541759488> **f!espri**", " **Rastgele Soğuk Espri Yapar.** ",)
  
  .addField("<a:versionok:762367652541759488> **f!çeviri**", " **Yazdığınız Yazıyı TR'ye Çevirir.**",)
  
  .addField("<a:versionok:762367652541759488> **f!playstore**", " **PlayStoreda Oyun Ararsınız.**",)
 
  .addField("<a:versionok:762367652541759488> **f!adam-asmaca**", " **Adam Asmaca Oynayın.**",)
  
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
  aliases: ["yardım" , "mod"],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence'
};