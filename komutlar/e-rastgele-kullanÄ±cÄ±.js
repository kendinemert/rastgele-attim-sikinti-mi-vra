const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Rastgele kullanıcı;')
    .setDescription(`${message.guild.members.cache.random().displayName}`)
    .setThumbnail(message.author.avatarURL())
    .setFooter('Rastgele Kullanıcı')
    .setTimestamp()
    message.channel.send(embed).then(msg => {msg.delete(7000)});
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['r'],
  permLevel: 0
};

exports.help = {
  name: 'rastgele-kullanıcı'
};