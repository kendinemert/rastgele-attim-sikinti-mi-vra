const Discord = require("discord.js");
exports.run = (client, message) => {
let motion = new Discord.MessageEmbed()

    .setAuthor("=-------------------------------------------------------=")
    .addField("**__Sahip__**",`**<@704328260024008714> | @Hançerˢᵏ#8631 **`) 
    .addField("**__Bot Verileri__**", `**» Toplam Sunucu: ${client.guilds.cache.size}** \n**» Toplam Kullanıcı: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n**» Toplam Kanal: ${client.channels.cache.size}**`) 
    .addField("**__Sürümler__**",`» Discord.js Sürümü: **V${Discord.version}** \n» Node.js Sürümü: **${process.version}**`) 
    .addField("**__Gecikmeler__**",`» Bot Pingi: **${client.ws.ping}** \n» Mesaj Gecikmesi: **${new Date().getTime() - message.createdTimestamp}**`)
    .setImage("https://cdn.discordapp.com/attachments/785214462827167804/795868780571787284/standard-1.gif")
    .setFooter("FAKON ©2021 Tüm Haklar Saklıdır.\n=----------------------------------------------------------------=")
    .setColor("DAFF00");
  message.channel.send(motion);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};
exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"

}; 