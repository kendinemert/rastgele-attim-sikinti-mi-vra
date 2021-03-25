const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
    .setTitle("Token")
    .setDescription(`**Kanka Sana Tokenimi Vereceğime Gerçekten İnandın Mı 
Gerçekten İnandıysan Helal Olsun. 🖕**`)
    .setColor("RANDOM")
    .setImage("https://cdn.discordapp.com/attachments/785214462827167804/806506224497590312/bilinmeyen.gif")
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
  aliases: ["bot-token", "bottoken"],
  permLevel: 0
};
exports.help = {
  name: "token",
  description: "botun tokeni ni atar",
  usage: "token"
};