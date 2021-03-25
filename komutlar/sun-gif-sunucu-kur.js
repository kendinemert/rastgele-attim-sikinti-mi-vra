const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === message.guild.owner.id) {
      
            message.channel.send(new Discord.MessageEmbed().setColor('#000000').setTitle('Komut girişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
  
  //1
            message.guild.channels.create(`🎈`, { type: 'category'});
   message.guild.channels.create(`🔔・announcement`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🎈")))
   message.guild.channels.create(`🎁・giveaways`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🎈")))
   message.guild.channels.create(`🌏・welcome`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🎈")))
   message.guild.channels.create(`💡・rank`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🎈")))
             
  
  //2
  message.guild.channels.create(`🍁`, { type: 'category'});
   message.guild.channels.create(`🌵・j4j`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🍁")))
   message.guild.channels.create(`🌻・s4s`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🍁")))
   message.guild.channels.create(`📍・commands`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🍁")))
              
  //3
  message.guild.channels.create(`🌒`, { type: 'category'});
   message.guild.channels.create(`🚀・boost`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🌒")))
   message.guild.channels.create(`⚡・information`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🌒")))
  message.channel.send("Gerekli kanallar kuruluyor. Rolleri ayarlamak sana düşer :)")
          });
});
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu sadece sunucu sahibi kullanabilir!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-kur"],
  permLevel: 3,
  kategori: "mod"
};


exports.help = {
  name: 'j4j-sunucu-kur',
  description: 'Sunucuyu kurar.',
  usage: 'j4j-sunucu-kur'
};