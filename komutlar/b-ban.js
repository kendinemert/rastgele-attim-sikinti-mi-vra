const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
	let rol = db.fetch(`banrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed()
                                                                                                                     .setDescription("Ban yetkilisi ayarlanmamış veya <@&" + rol + "> rolüne sahip değilsiniz"))
    let kicklog = db.fetch(`banlog_${message.guild.id}`)
	if(!kicklog) return message.channel.send('Ban Log Sistemi Ayarlanmamış.')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send(' **:x: Yanlış Kullanım: f!ban @kullanıcı Sebep **')
     if(user.id === message.author.id) return message.channel.send(' **:x: Kendini Banlayamassın !**')
     if(user.id === client.user.id) return message.channel.send(' **:x: Botu Kardeşimi Banlayamazsın Seni Canavar!**')
  if(user.id === message.guild.ownerID) return message.channel.send('**:x: Sunucu Sahibini Banlayamassın Zaten Yetkim Yetmez :)**')
    if (!message.guild.member(user).bannable) return message.reply(' **:x: Bu Kişinin Rolü Senden Üstte Veya `Üyeleri Yasakla` Yetkisine Sahip. **');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle Banlamak İstediğine Eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTitle('Yasaklama')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Banlanan Kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(kicklog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('Banlama İşlemi İptal Edildi')
      })
    })
 })
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban"
}