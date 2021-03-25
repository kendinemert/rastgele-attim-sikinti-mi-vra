const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
    .setTitle("Fakon")
    .setDescription(
      `<a:mc:809365370912636939> **Devrim Yaratan Fakon Botun Yardım Menüsü** <a:mc:809365370912636939>

<a:emoji_32:802508082679644170> **f!yetkili** : Moderasyon Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!koruma** : Koruma Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!kullanıcı** : Kullanıcı Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!eğlence** : Eğlence Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!logo** Logo Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!ekonomi** Ekonomi Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!müzik** Müzik Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!kayıt-sistemi** Kayıt Komutları Listeler.
<a:emoji_32:802508082679644170> **f!çekiliş-sistemi** Çekiliş Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!sunucukur-sistemi** Sunucu-Kur Komutlarını Listeler.
<a:emoji_32:802508082679644170> **f!abone-sistemi** : Abone Komutlarını Listeler.
||
||`)

    .setColor("#FF0F0")
    .setFooter("FAKON ©2021 Tüm Haklar Saklıdır.")
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
  aliases: ["y", "help"],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};