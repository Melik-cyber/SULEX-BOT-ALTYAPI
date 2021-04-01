const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:a_:821738957997211659>  **Bu Komutu Kullanmak İçin MESAJLARI YÖNET İzninizin Olması Lazım!**");
if(!args[0]) return message.channel.send("<a:carpi:821416413138911272> **Lütfen Silinicek Mesaj Miktarını Yazın!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:onayl:809153025234305024>  **${args[0]}** **Adet Mesajı Sildim**`)
})
}

exports.config = {
name: "temizle",
aliases: ["sil"]
};