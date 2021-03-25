const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === message.guild.owner.id) {
      
            message.channel.send(new Discord.MessageEmbed())
                                 .setColor('#000000')
                                 .setTitle('Komut girişi')
                                 .setDescription('Gerekli Dosaylar Kurulsunmu?.')
                                 .setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek')
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
  
  //önemli kanallar
  message.guild.channels.create(`ÖNEMLİ KANALLAR`, { type: 'category'});
   message.guild.channels.create(`📜・kurallar`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`🚪・gelen-giden`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`📢・duyuru`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`🆓・otorol`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
  message.guild.channels.create(`🎉・çekiliş`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
  message.guild.channels.create(`✔️・sayaç`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
             
  
  
  
  //sohbet
  message.guild.channels.create(`SOHBET KANALLARI`, { type: 'category'});
   message.guild.channels.create(`💬・sohbet`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`🤖・bot-komutları`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`🐸・memes`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`📷・foto-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`👎・şikayet-odası`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`👍・önerim-var`, {type : "text"})
  
  
  
  //mini oyun
  message.guild.channels.create(`MİNİ OYUN ODALARI`, { type : 'category'})
  message.guild.channels.create(`🚬・geceye-söz-bırak`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "MİNİ OYUN ODALARI")))
  message.guild.channels.create(`🔢・sayı-saymaca`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "MİNİ OYUN ODALARI")))
  message.guild.channels.create(`🔡・kelime-türetmece`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "MİNİ OYUN ODALARI")))
  message.guild.channels.create(`👶・bir-anı-anlat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "MİNİ OYUN ODALARI")))
  message.guild.channels.create(`↕️・tuttu-tutmadı`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "MİNİ OYUN ODALARI")))
  message.guild.channels.create(`🔐・itiraf-et`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "MİNİ OYUN ODALARI")))
  message.guild.channels.create(`⚔️・düello`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "MİNİ OYUN ODALARI")))
  
  
  //ses
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
              message.guild.channels.create(`SES KANALLARI`, { type: 'category'});
   message.guild.channels.create(`🔊・Genel Sohbet`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`♫・Müzik Odası`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`🚸・Bekleme Odası`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
            
  //sesli oyun
  message.guild.channels.create(`OYUN ODALARI`, { type: 'category'});
message.guild.channels.create(`🎮・LOL`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮・ZULA`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮・COUNTER STRİKE`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮・PUBG`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
  message.guild.channels.create(`🎮・FORTNİTE`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮・MİNECRAFT`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮・ROBLOX`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
     message.guild.channels.create(`🎮・WOLFTEAM`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
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
  aliases: ["normal-sunucu-kur"],
  permLevel: 3,
  kategori: "mod"
};


exports.help = {
  name: 'normal-sunucu-kur',
  description: 'Sunucuyu kurar.',
  usage: 'normal-sunucu-kur'
};