const Discord = require('discord.js');

exports.run = (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL({dynamic: true})).setColor('#f583fa')
.setDescription(`Hey Sen Kayıt Sistemini Kullanmak İçin Altaki Komutları Kullan!\n\n
😋 **f!erkek-role [@rolEtiket]**
😋 **f!kadın-role [@rolEtiket]**
😋 **f!yetkili-role [@rolEtiket]**
😋 **f!kayıtsız-role [@rolEtiket]**

> Kullanım İçin: f!erkek/kız İsim Yaş
**Örnek kullanım:** \`f!e @Etiket\` veya \`f!e @Etiket İsim | Yaş\`

\`\`\`İsmine sembol koymak için: f!kayıt-tag 🚀\`\`\``));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-sistemi'
};