const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:carpi:821416413138911272>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("<a:carpi:821416413138911272> Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("<a:onayl:809153025234305024> Anti-raid sistemi başarıyla açıldı");
  }
 
  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "<a:carpi:821416413138911272> Anti-raid açılmamış. Açmak için **-anti-raid aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("<a:onayl:809153025234305024> Anti-raid sistemi başarıyla kapatıldı");
  }
  if (!args[0])
    return message.reply(
      "<a:carpi:821416413138911272> Lütfen geçerli işlem girin. Örnek: **anti-raid aç/kapat**"
    );
};
exports.config = {
  name: "anti-raid",
  aliases: []
};

 