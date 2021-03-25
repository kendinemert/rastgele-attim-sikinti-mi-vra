const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = function(client, message, args) {
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  if (REASON.includes("@everyone"))
    return message.channel.send(`Yo yo everyone sebep olarak giremessin`);
  if (REASON.includes("@here"))
    return message.channel.send(`Yo yo here sebep olarak giremessin`);
  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(
      `Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`
    );
  if (!REASON) return message.channel.send(embed);
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(
      `Afk Moduna Başarıyla Geçildi ! <a:domates:799641748648493057> \nAfk Olma Sebebi : **${REASON}**`
    );
  message.channel.send(afk);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "afk komutu",
  usage: "afk"
};
