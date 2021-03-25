const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
    .setTitle("ZayronMCPE Kurallar")
    .setDescription(`📜 Kurallar

Kesinlikle Denemeyin!

- Hile Yapmayın.
- Hile kesinlikle yapmayın, hile yapanlar asla affedilmez sınırsız ban cezasıdır !

Küfür Etmeyin!

- Kesinlikle kötü argo veya cinsel içerikli sözler yazıp küfür etmeyin, küfür etmenin cezası mute veya 5-10 gün arası ban cezasıdır.

Dolandırıcılık Yapmayın ve Kimseyi Kandırmayın!

- Kimseyi Dolandırmayın, dolandırmanın cezası 1-5 gün arası ban cezasıdır. Yetkiliyi kesinlikle kandırmayın cezası sınırsız ban cezasıdır.

Oyundaki Hataları Değerlendirmeyin!

- Kesinlikle ama kesinlikle bugları kullanmayın yetkili birine söylerseniz ödül alırsınız fakat, kullanırsanız cezası sınırsız bandır.

Reklam Kesinlikle Yasaktır !! ! !!

- Ne Olursa olsun Reklam yapmak ban sebebidir !  Cezası sınırsız bandır ve açılmaz.

Yöneticileri Rahatsız Etmeyin ve Eşya İstemeyin!

- Yöneticileri rahatsız etmeyiniz ve eşya istemeyiniz eşya vip vs. item istemek yasaktır cezası 5-15 gün bandır.

Rol Yapmayın!

- Ünlü birinin hesabıyla sunucuya girmeyin veya yetkili gibi davranmayın cezası sınırsız bandır.

Siyaset Yapmayın!

- Siyaset kesnlikle yasaktır, amacımız eğlenmek olduğu için sunucuda siyasetin yeri yoktur.


Bilmeniz Gerekenler

- Hesap Şifrelerinizi zor yapın, çalmaya çalışanlar olabilir sorumlusu yönetim değildir.
- Atılan ban hesabı çalındıysa ve başkası yaptıysa bile ban açılmaz hesap sorumluluğu size aittir.
- Ban atıldıktan sonra açılması mümkün değildir. Yöneticilere yalvarmayın.
- Herkes kendi hesabından sorumludur, kolay şifreler yaparsanız başkaları çalabilir. Sorumlusu yönetim değildir!
- Skyblock'da veya başka tüm sunucularda Spawner/Item çalınması durumunda Yönetim sorumlu değildir!

- TPA Tuzağı yasaktır. Cezası 1 Hafta BAN dır !

- ADA/SPAWNER Satışı (Gerçek para ile) Yasaktır ! Yapanlar Sınırsız Banlanır Ve Adası Silinir!

 

Sunucuya Gelen Herkes Kuralları Okumuş Ve Onaylamış Sayılır *
`)

    .setColor("RED")
    .setFooter("ZayronMCPE ©2021 Tüm Haklar Saklıdır.")
    .setImage("https://cdn.discordapp.com/attachments/785214462827167804/810513879862870016/bilinmeyen.gif");
    if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hazırkurallar", "hazır-kurallar"],
  permLevel: 0
};
exports.help = {
  name: "kurallar",
  description: "Tüm komutları gösterir.",
  usage: "kurallar"
};