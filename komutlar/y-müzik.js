const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
    .setTitle("=-------------------------------------------------------=")
    .setDescription(`<a:kirmizihype:802482836577452033> **Müzik Menüsü** <a:kirmizihype:802482836577452033>
    
<a:versionok:762367652541759488> **f!oynat** <şarkı-adı> : **Bir Şarkıyı Oynatır.**
<a:versionok:762367652541759488> **f!geç** **Sıradaki Şarkıyı geçer.**
<a:versionok:762367652541759488> **f!tekrarla** : **O Anki şarkıyı Hep tekrarlar.**
<a:versionok:762367652541759488> **f!durdur** : **Çalan Şarkıyı Durdur Ettirir.**
<a:versionok:762367652541759488> **f!devam** : **Duran Şarkıyı Devam Ettirir.**
<a:versionok:762367652541759488> **f!liste** : **Çalma Listesini Gösterir.**
<a:versionok:762367652541759488> **f!çalan** : **O Anki Oynatılan Şarkıyı Söyler.**
<a:versionok:762367652541759488> **f!sözler** : **Çalan Şarkının Sözlerini Atar.**
<a:versionok:762367652541759488> **f!ses** : **Şarkının Ses Seviyesini Ayarlar.**
||
||`)
    .setColor("#FF0F0")
    .setFooter("FAKON ©2021 Tüm Haklar Saklıdır.\n=----------------------------------------------------------------=")
    .setImage("https://cdn.discordapp.com/attachments/785214462827167804/795868780571787284/standard-1.gif");
    if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y-müzik", "yardım-müzik"],
  permLevel: 0
};
exports.help = {
  name: "müzik",

  description: "Tüm komutları gösterir.",

  usage: "müzik"

};