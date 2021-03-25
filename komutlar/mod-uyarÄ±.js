const Discord = require('discord.js');
const ms = require("ms");
const data = require('quick.db')
const moment = require('moment')
moment.locale('tr');

exports.run = async (client, message, args) => {
  
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Banla** yetkisine sahip olmalısın!`);
  

  if(!args[0]) return message.channel.send(`Uyarıcağın Kişiyi Etiketlemelisin <a:unlem:775710921590177823>`)
  
  
  
  
  
  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase().includes(args[0].toLowerCase()))
  if(!user) return message.channel.send(`"${args[0]}" bu sunucuda bulunamadı.`)
  
  if(message.guild.members.cache.get(user.id).roles.highest.position > message.guild.members.cache.get(message.author.id).roles.highest.position) return message.channel.send('Rol hiyerarşisinde bunu yapacak kadar yüksek değilsiniz.')
  if(message.guild.members.cache.get(user.id).roles.highest.position == message.guild.members.cache.get(message.author.id).roles.highest.position) return message.channel.send('Rol hiyerarşisinde bunu yapacak kadar yüksek değilsiniz.')
  
  
  let reason;
  if(!args[1]) {
  reason = ''
  } else { reason = ` Sebep: ${args[1]}` }
  
  
  await data.add(`sayı.${message.guild.id}.${user.id}`, 1)
  if(typeof await data.fetch(`case.${message.guild.id}`) != 'number') await data.set(`case.${message.guild.id}`, 0);
  await data.add(`case.${message.guild.id}`, 1)

  const l = await data.fetch(`sayı.${message.guild.id}.${user.id}`)
  
  const casee = await data.fetch(`case.${message.guild.id}`)
  var tarih = new Date(Date.now())
  console.log(tarih)
  if(!data.get(`bilgi.${message.guild.id}.${user.id}`) instanceof Array) data.set(`bilgi.${message.guild.id}.${user.id}`, []);
  
  data.push(`bilgi.${message.guild.id}.${user.id}`, {moderator: message.author.tag, case: '#'+casee.toString() ? '#'+casee.toString() : '#0', tarih: moment().format("DD-MM-YYYY"), reason: reason ? reason : 'Sebep: N/A'})
  user.send(`${message.guild.name} sunucusunda uyarıldınız. Sebep: ${reason.replace("Sebep: ", '') ? reason.replace("Sebep: ", '') : 'N/A'} Moderatör: ${message.author.tag} (id: ${message.author.id})`)
  message.channel.send(`**${user.tag ? user.tag : user.user.tag}** uyarıldı, bu onun ${l ? l : '0'}. uyarısı.${reason ? reason : ''}`)
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uyarı'
}