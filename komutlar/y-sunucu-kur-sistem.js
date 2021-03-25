const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
    .setTitle("<a:alarm:782196892775874571> Kendi Sunucunuzuz Kendiniz Oluşturun! <a:alarm:782196892775874571>")
    .setDescription(`:rocket: **f!normal-sunucu-kur** **__Hazır Sunucu Kurar__**\n:rocket: **f!j4j-sunucu-kur** **__J4J Sunucusu Kurar__**`)
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
  aliases: ["y-sunucukur", "yardım-sunucukur"],
  permLevel: 0
};
exports.help = {
  name: "sunucukur-sistemi",
  description: "Tüm komutları gösterir.",
  usage: "sunucukur-sistemi"

};