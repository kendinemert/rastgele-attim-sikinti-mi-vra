const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
    .setTitle("=-------------------------------------------------------=")
    .setDescription(`\n\n\n> Neden Botunu Eklemeliyim?
**Çünkü İşinize Yarayacağını Düşünüyoruz.**

**»Linkler«**
 
[[🇹🇷 Davet Et]](https://discord.com/oauth2/authorize?client_id=785191098573914112&scope=bot&permissions=2147483647) [[🇹🇷 Destek Sunucum]](https://discord.gg/pfsKPrMfTY)
[[🇹🇷 Oy Ver]](https://top.gg/bot/785191098573914112) [[🇹🇷Web Site]](https://www.fakonbot.tk)`)

    .setColor("#FF0F0")
    .setFooter("FAKON ©2021 Tüm Haklar Saklıdır.\n=----------------------------------------------------------------="
    )
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
  aliases: ["botu-ekle"],
  permLevel: 0
};
exports.help = {
  name: "davet",
  description: "Tüm komutları gösterir.",
  usage: "davet"
};