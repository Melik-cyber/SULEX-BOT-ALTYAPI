const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:carpi:821416413138911272>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      "<a:carpi:821416413138911272> Anti-raid açılmamış. Açmak için **-anti-raid aç**"
    );
  }
  if (!args[1]) return message.reply("<a:carpi:821416413138911272> Lütfen bir bot id si girin");
 
  if (isNaN(args[1])) {
    return message.reply("<a:carpi:821416413138911272> Sadece ID");
  }
  if (args[0] == "ver") {
    client.users.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + "<a:onayl:809153025234305024> ID li bota izin verildi");
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + "<a:onayl:809153025234305024> ID li botun izni kaldırıldı");
  }
};
exports.config = {
  name: "bot-izni",
  aliases: []
};

 