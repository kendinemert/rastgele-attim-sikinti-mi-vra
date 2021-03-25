const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedyardim = new Discord.MessageEmbed()

    .setTitle("=-------------------------------------------------------=")

    .setDescription(
      `🇹🇷 **Ekonomi Menüsü** 🇹🇷

 <a:versionok:762367652541759488> **f!günlük-para** Günlük Para Verir.
 <a:versionok:762367652541759488> **f!hesap-aç** Banka Hesap Açar.
 <a:versionok:762367652541759488> **f!hesabımı-sil** Banka Hesabınızı Siler.
 <a:versionok:762367652541759488> **f!hesap** Banka Hesabınız Hakkında Bilgi Verir.
 <a:versionok:762367652541759488> **f!para-gönder** Etiketlediginiz Kişiye Belirttiğiniz Miktarda Para Gönderir.
 <a:versionok:762367652541759488> **f!param** Bankadaki Paranızı Belirtir.
 <a:versionok:762367652541759488> **f!parası** Etiketlediginiz Kişinin Parasını Gösterir.
 <a:versionok:762367652541759488> **f!market** Markteti Gösterir.`)
    .setColor("#FF0F0")
    .setFooter("FAKON ©2021 Tüm Haklar Saklıdır.\n=----------------------------------------------------------------="
    )
    .setImage("https://cdn.discordapp.com/attachments/785214462827167804/795868780571787284/standard-1.gif"
    );
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
  aliases: ["Ekonomi", "EKONOMİ"],
  permLevel: 0
};
exports.help = {
  name: "ekonomi",
  description: "Tüm komutları gösterir.",
  usage: "ekonomi",
};