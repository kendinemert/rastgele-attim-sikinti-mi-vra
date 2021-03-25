const Discord = require("discord.js");
const client = new Discord.Client();
const jimp = require("jimp");
const db = require("quick.db");
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const { GiveawaysManager } = require('discord-giveaways');
const moment = require("moment");
require("./util/eventLoader")(client);
///////////////////////////////////////
client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});
let prefix = ayarlar.prefix;
const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`Slm ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${prefix}${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 5;
  return permlvl;
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 5;
  return permlvl;
};
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//

client.on("message", async msg => {
  const i = await db.fetch(`kufur_${msg.guild.id}`);
  if (i == "acik") {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "sik",
      "yarrak",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "a.q",
      "a..q",
      "a.q.",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg.reply("Bu Sunucuda Küfür Filtresi Aktiftir.");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  const i = db.fetch(`${oldMessage.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "sik",
      "yarrak",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "a.q",
      "a..q",
      "a.q.",
      "amq"
    ];
    if (kufur.some(word => newMessage.content.includes(word))) {
      try {
        if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
          oldMessage.delete();

          return oldMessage.reply("Bu Sunucuda Küfür Filtresi Aktiftir.");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//

//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var e = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(e);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//

//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.addRole(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.MessageEmbed()
    .setDescription(`Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    kanal.send(embed)
  } else {
    return;
  }
})
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//

//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("GREEN")
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(`Afk Modundan Başarıyla Çıkıldı.`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("RED")
      .setDescription(
        `**BU KULLANICI AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``
      );

    message.channel.send(afk);
  }
});

//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//

//-------------------- Sa As Sistemi --------------------//
//-------------------- Sa As Sistemi --------------------//
//-------------------- Sa As Sistemi --------------------//

client.on("message", async message => {
  const asd = message.content.toLocaleLowerCase();

  if (
    asd === "selam" ||
    asd === "sa" ||
    asd === "selamün aleyküm" ||
    asd === "selamun aleyküm" ||
    asd === "slm" ||
    asd === "sea" ||
    asd === "Selam"
  ) {
    let e = await db.fetch(`sa-as_${message.guild.id}`);
    if (e === "acik") {
      const embed = new Discord.MessageEmbed()

        .setDescription(
          `Aleyküm Selam Ve Rahmetullahi Ve Berekatuhu Ve Magfiratuhu Ebeden Ve Daimen`
        )
        .setColor("RED");

      return message.channel.send(embed);
    }
  }
});

//-------------------- Sa As Sistemi --------------------//
//-------------------- Sa As Sistemi --------------------//
//-------------------- Sa As Sistemi --------------------//

//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//

client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`kufur_${message.guild.id}`);
  let kullanici = message.member;
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az",
      ".hub"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yapmayı Kes! Bu İlk Uyarın! (1/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yapmayı Kes! Bu İkinci Uyarın! (2/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Reklam-Engel Sistemi!`
          });
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yaptığı İçin Sunucudan Atıldı! (3/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.members.ban({
            reason: `Reklam-Engel Sistemi!`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Reklam Kick Sistemi")
            .setDescription(
              `<@${message.author.id}> Atıldıktan Sonra Tekrar Reklam Yaptığı İçin Sunucudan Yasaklandı!`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});

//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//

//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//

client.on("message", async message => {
  if (message.author.bot) return;

  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);

  if (prefix === null) prefix = prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content

    .slice(prefix.length)

    .trim()

    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//

//-------------------- Mod Log Sistemi --------------------//
//-------------------- Mod Log Sistemi --------------------//
//-------------------- Mod Log Sistemi --------------------//

client.on("channelCreate", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`codeminglog_${channel.guild.id}`)
  );
  if (!c) return;
  var embed = new Discord.MessageEmbed()
    .addField(
      `Kanal oluşturuldu`,
      ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL()
    );
  c.send(embed);
});

client.on("channelDelete", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`codeminglog_${channel.guild.id}`)
  );
  if (!c) return;
  let embed = new Discord.MessageEmbed()
    .addField(
      `Kanal silindi`,
      ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL()
    );

  c.send(embed);
});

client.on("channelNameUpdate", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`codeminglog_${channel.guild.id}`)
  );
  if (!c) return;
  var embed = new Discord.MessageEmbed()
    .addField(
      `Kanal İsmi değiştirildi`,
      ` Yeni İsmi: \`${channel.name}\`\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL()
    );
  c.send(embed);
});

client.on("emojiCreate", emoji => {
  const c = emoji.guild.channels.cache.get(
    db.fetch(`codeminglog_${emoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji oluşturuldu`,
      ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\nID: ${emoji.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${emoji.client.user.username}#${emoji.client.user.discriminator}`,
      emoji.client.user.avatarURL()
    );

  c.send(embed);
});
client.on("emojiDelete", emoji => {
  const c = emoji.guild.channels.cache.get(
    db.fetch(`codeminglog_${emoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji silindi`,
      ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\nID: ${emoji.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${emoji.client.user.username}#${emoji.client.user.discriminator}`,
      emoji.client.user.avatarURL()
    );

  c.send(embed);
});
client.on("emojiUpdate", (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(
    db.fetch(`codeminglog_${newEmoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji güncellendi`,
      ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\nID: ${oldEmoji.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`,
      newEmoji.client.user.avatarURL()
    );

  c.send(embed);
});

client.on("guildBanAdd", async (guild, user) => {
  const channel = guild.channels.cache.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL())
    .addField(
      `Kullanıcı banlandı`,
      ` İsmi: \`${user.username}\`\n ID: **${
        user.id
      }**\n Sebep: **${entry.reason || "Belirtmedi"}**\n Banlayan: **${
        entry.executor.username
      }#${entry.executor.discriminator}**`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${entry.executor.username}#${entry.executor.discriminator} tarafından`,
      entry.executor.avatarURL()
    );

  channel.send(embed);
});

client.on("guildBanRemove", async (guild, user) => {
  const channel = guild.channels.cache.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL())
    .addField(
      `Kullanıcının banı açıldı`,
      ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${entry.executor.username}#${entry.executor.discriminator} tarafından`,
      entry.executor.avatarURL()
    );

  channel.send(embed);
});
client.on("messageDelete", async message => {
  if (message.author.bot) return;

  const channel = message.guild.channels.cache.get(
    db.fetch(`codeminglog_${message.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .setAuthor(
      `${message.author.username}#${message.author.discriminator}`,
      message.author.avatarURL()
    )
    .setTitle("Mesaj silindi")
    .addField(
      `Silinen mesaj : ${message.content}`,
      `Kanal: ${message.channel.name}`
    )
    //  .addField(`Kanal:`,`${message.channel.name}`)
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${message.client.user.username}#${message.client.user.discriminator}`,
      message.client.user.avatarURL()
    );

  channel.send(embed);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (oldMessage.content == newMessage.content) return;

  const channel = oldMessage.guild.channels.cache.get(
    db.fetch(`codeminglog_${oldMessage.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ", `${oldMessage.content}`)
    .addField("Yeni mesaj : ", `${newMessage.content}`)
    .addField("Kanal : ", `${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,
      `${oldMessage.client.user.avatarURL()}`
    );

  channel.send(embed);
});

client.on("roleCreate", async role => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`codeminglog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)
    .setTimestamp()
    .setColor("Black")
    .addField("Rol renk kodu : ", `${role.hexColor}`)
    .setFooter(
      `${role.client.user.username}#${role.client.user.discriminator}`,
      role.client.user.avatarURL()
    );

  channel.send(embed);
});

client.on("roleDelete", async role => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`codeminglog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)
    .setTimestamp()
    .setColor("Black")
    .addField("Rol renk kodu : ", `${role.hexColor}`)
    .setFooter(
      `${role.client.user.username}#${role.client.user.discriminator}`,
      role.client.user.avatarURL()
    );

  channel.send(embed);
});

//-------------------- Mod Log Sistemi --------------------//
//-------------------- Mod Log Sistemi --------------------//
//-------------------- Mod Log Sistemi --------------------//

client.on("message", message => {
  if (message.content.toLowerCase() === "@" + client.user.tag) {
    message.channel.send(`Merhaba Burdaki Prefixim ${ayarlar.prefix}`);
  }
});

//-------------------- CAPS --------------------//
//-------------------- CAPS --------------------//
//-------------------- CAPS --------------------//

//-------------------- CAPS --------------------//
//-------------------- CAPS --------------------//
//-------------------- CAPS --------------------//

//-------------------- SPAM --------------------//
//-------------------- SPAM --------------------//
//-------------------- SPAM --------------------//
const dctrat = require("dctr-antispam.js");
const data = require("quick.db");
var authors = [];
var warned = [];

var messageLog = [];

client.on("message", async message => {
  const spam = await data.fetch(`spam.${message.guild.id}`);
  if (!spam) return;
  const maxTime = await data.fetch(
    `max.${message.guild.id}.${message.author.id}`
  );
  const timeout = await data.fetch(
    `time.${message.guild.id}.${message.author.id}`
  );
  data.add(`mesaj.${message.guild.id}.${message.author.id}`, 1);
  if (timeout) {
    const sayı = await data.fetch(
      `mesaj.${message.guild.id}.${message.author.id}`
    );
    if (Date.now() < maxTime) {
      return message.delete();
    }
  } else {
    data.set(`time.${message.guild.id}.${message.author.id}`, "ok");
    data.set(`max.${message.guild.id}.${message.author.id}`, Date.now() + 3000);
    setTimeout(() => {
      data.delete(`mesaj.${message.guild.id}.${message.author.id}`);
      data.delete(`time.${message.guild.id}.${message.author.id}`);
    }, 500);
  }
});

//-------------------- SPAM --------------------//
//-------------------- SPAM --------------------//
//-------------------- SPAM --------------------//

client.on("message", async message => {
  const asd = message.content.toLocaleLowerCase();

  if (asd === "<@785191098573914112>") {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `<a:ben_ben:802516033957003264> • Prefixlerim : f! ve <@785191098573914112>
<a:Ayar:802516091850326056> • f!y Yazarak Komutlarımı Kategorileriyle Görebilirsin.`
      )
      .setColor("GREEN");
    return message.channel.send(embed);
  }
});
//////
/////
client.on("message", async message => {
  const asd = message.content.toLocaleLowerCase();

  if (asd === "<@704328260024008714>" || asd === "<@757186190247198821>") {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Hey Sahibimi Etiketleme!\nUmarım Geçerli Bir Sebebin Vardır.`)
     .setColor("RED");
    return message.channel.send(embed);
  }
});
client.on("guildDelete", guild => {
  let rrrsembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(" Bot Atıldı ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.get("802469640982364160").send(rrrsembed);
});
//--------------------------------------------------------//
client.on("guildCreate", guild => {
  let rrrsembed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle(" Bot Eklendi ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);
  client.channels.get("802469640982364160").send(rrrsembed);
});
client.login(ayarlar.token);

//-----BOT SAHİBİNE MESAJ ATMA-----//
client.on("guildCreate", guild => {
  guild.owner.send(
    new Discord.MessageEmbed()
      .setTitle("Beni Eklediğin İçin Teşekkürler")
      .setColor("BLACK").setDescription(`
Komutlara Bakmak İçin f!yardım\n
Davet Linkim: f!davet`)
  );
});

/////ping/////////
client.on("message", message => {
  if (message.content.toLowerCase() === "?ping") {
    message.channel.send(" <a:domates:799641748648493057>");
    const embed = new Discord.MessageEmbed();
  }
});

///////////SAHİP HOŞ GELDİN////////
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 900000
let cmf = await db.fetch(`speriax_${msg.author.id}`);
let i = ayarlar.sahip
          if (msg.author.id == i) {
    if (cmf !== null && timeout - (Date.now() - cmf) > 0) {
        let time = ms(timeout - (Date.now() - cmf));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`speriax_${msg.author.id}`, Date.now());
  var embed = new Discord.MessageEmbed()
  .setDescription(`İşte benim **sahibim**! <@${msg.author.id}>`)
  .setColor("BLUE")
   msg.channel.send(embed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});
//////çekiliş/////////
if(!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {

    async getAllGiveaways(){
        return db.get("giveaways");
    }

    async saveGiveaway(messageID, giveawayData){
        db.push("giveaways", giveawayData);
        return true;
    }

    async editGiveaway(messageID, giveawayData){
        const giveaways = db.get("giveaways");
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        newGiveawaysArray.push(giveawayData);
        db.set("giveaways", newGiveawaysArray);
        return true;
    }

    async deleteGiveaway(messageID){
        const newGiveawaysArray = db.get("giveaways").filter((giveaway) => giveaway.messageID !== messageID);
        db.set("giveaways", newGiveawaysArray);
        return true;
    }
  
  
};
const manager = new GiveawayManagerWithOwnDatabase(client, {
  storage: false,
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#0a99ff",
    reaction: "🎉"
  }
});
client.giveawaysManager = manager;
////////////////