const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:carpi:821416413138911272>   **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:carpi:821416413138911272>  **Kayıt Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz!**\n**__Örnek__**: \`${prefix}kayıt-verilecek-rol-ayarla @VerilecekRol\``)
 
  message.channel.send(`<a:onayl:809153025234305024>   **Kayıt Olan Kullanıcılardan Verilecek Otomatik Rol** \`${rol}\` **Şeklinde Ayarlandı!**`)

 
  db.set(`kayitVR_${message.guild.id}`, rol.id)  
};
exports.config = {
  name: 'kayıt-verilecek-rol-ayarla',
  aliases: []
};
