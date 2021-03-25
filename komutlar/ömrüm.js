const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {

message.channel.send("Hesaplanıyor").then(message => {

    var red = [     
      "30 Yıl Sonra Ölüceksin",
      "1 Yıl Sonra Ölüceksin :(",
      "80 yıl Daha Ömrün Var",
      "Dünyanın En Yaşlı İnsanı Olcaksın",
      "Ömrün Kısa Üzgünüm",
      "Daha Ömrün Var Sakin Ol",
    ];
    var red = red[Math.floor(Math.random() * red.length)];  
    message.edit(`${red}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hayatım"],
  permLevel: 0
};

exports.help = {
  name: "ömrüm",
  description: "Ne kadar ömrün var.",
  usage: "ömrüm"
};