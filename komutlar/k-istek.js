const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

let kanal = "802469640982364160"/// İstek kod kanal id

 let kanall = client.channels.cache.find(c => c.id === kanal)

let istek = args.slice(0).join(' ') 
if(!istek) return message.channel.send("İstek belirt!")

message.channel.send(

    new Discord.MessageEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('✅ Başarılı ✅')

    .setDescription('Önerini Gönderdim'))

   let embed = new Discord.MessageEmbed()

    .setColor(message.guild.me.displayColor)

    .setTitle('Yeni Bir Öneri!')

    .setAuthor(message.guild.name, client.user.avatarURL())

    .setThumbnail(message.author.avatarURL())

      .addField('Gönderen', `**${message.author.tag}**`)

      .addField('Öneri', istek)

    

    kanall.send(embed).then(i => i.react("✅").then (a => i.react("❎")))

}

exports.conf = {

    enabled : true,    guildOnly : false,

    aliases : ['istek'],

    permLevel : 0

}

exports.help = {

    name : 'öneri',

    description : 'Öneri Yapar.',

    usage : 'öneri'

}