const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#000000') 
.setAuthor(`VitaBot Kayıt Komutları`, client.user.avatarURL())
.addField(`__Kanal Ayarla__`,`<:hse:809152333497237574>  \`${prefix}kayıt-kanal-ayarla\` Kayıt Ol Komutunun Kullanılacağı Kanalı Belirler`,true)
.addField(`__Kayıt Log__`,`<:kategori:809152540763095100>  \`${prefix}kayıt-log-kanal-ayarla\` Kayıt Ol Komutunun Denetim Kaydı Kanalını Belirler`,true)
.addField(`__Kayıt Ol__`,` <:simseq:821416901086806027>  \`${prefix}kayıt-ol\`  Kayıt Kanalında Kayıt Olmanızı Sağlar`,true)
.addField(`__Verilecek Rol__`,`<a:ayarlar2:821416212566507520>  \`${prefix}kayıt-verilecek-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek Rolü Belirler`,true)
.addField(`__Alınacak Rol__`,`<a:ayarlar:821416196675076207> \`${prefix}kayıt-alınacak-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`,true)
.addField(`__Giriş Sistemi__`,`<:onay:820720890009878538>  \`${prefix}giriş-sistemi\` Kayıt Kanalına Atılacak Mesajı Ayarlar`,true)
.addField(`__İsim Sistem__`,`<:kategori:809152540763095100> \`${prefix}isim-sistem\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek İsmi Belirler`,true)
.addField(`__Kayıt Sistemi Kapat__`,`<:kapal:827269229489029181> \`${prefix}kayıt-sistemi-kapat\` Kayıt Sistemini Tamamen Kapatır`,true)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "kayıtsistemi",
  aliases: []
}
