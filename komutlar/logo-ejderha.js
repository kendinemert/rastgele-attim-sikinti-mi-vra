const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bişey Yaz")
let link = "https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text="+isim
  const embed = new Discord.MessageEmbed()
  .setImage(link)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ejderha-logo", "ejderlogo"],
  kategori: 'logolar',
  permLevel: 0
};

exports.help = {
  name: 'e-logo',
  description: 'Logo Yaparsınız',
  usage: 'e-logo <yazı>'
};