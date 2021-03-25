const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
    .setTitle("=-------------------------------------------------------=")
    .setDescription(`
🇹🇷 LOGO MENÜ 🇹🇷

<a:versionok:762367652541759488> **f!arrow**: Ok Şeklinde Logo Atar
<a:versionok:762367652541759488> **f!banzai**: Banzai fontunda logo yaparsınız.
<a:versionok:762367652541759488> **f!bird**: Bird Logo yaparsınız.
<a:versionok:762367652541759488> **f!bubble**: Mavi Bubble ogo yaparsınız.
<a:versionok:762367652541759488> **f!bubble2**: Turuncu bubble logo yaparsınız.
<a:versionok:762367652541759488> **f!fluffy**: Şeker logo yaparsınız.
<a:versionok:762367652541759488> **f!gold**: Gold logo yaparsınız.
<a:versionok:762367652541759488> **f!habbo**: Habbo logo yaparsınız.
<a:versionok:762367652541759488> **f!hallowen**: Hallowen logo yaparsınız.
<a:versionok:762367652541759488> **f!ice**: Buz logo yaparsınız.
<a:versionok:762367652541759488> **f!retro-blue**: Mavi pixelli logo yaparsınız.
<a:versionok:762367652541759488> **f!modern**: Modern logo yaparsınız.
<a:versionok:762367652541759488> **f!mlogo**: M logo yaparsınız.
||
||`)
    .setColor("#FF0F0")
    .setFooter(
      "FAKON ©2021 Tüm Haklar Saklıdır.\n=----------------------------------------------------------------="
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
  aliases: ["logo", "logo"],
  permLevel: 0
};

exports.help = {
  name: "logo",
  description: "Tüm komutları gösterir.",
  usage: "logo"
};
