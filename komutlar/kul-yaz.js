const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {

let yazı = args.slice(0).join(' ')

if (!yazı) return message.reply("Yazı Yaz")


message.channel.send(yazı)
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yaz","botayazdır","bota-yazdır","yaz","konuştur"],
  permLevel: 0
};

module.exports.help = {
  name: "kurallar",
  description: "",
  usage: "yaz"
};