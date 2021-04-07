const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#000000') 
.setAuthor(`Seulex Oto Cevap Komutları`, client.user.avatarURL())
.setDescription(`<a:ayarlar:821416196675076207> Seulex botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Cevap Ekle__`,`<a:ayarlar2:821416212566507520> \`${prefix}otocevap-ekle\` Sunucunuza Özel Komut Eklemenize Yarar.`,true)
.addField(`__Oto Cevap Liste__`,`<:hse:809152333497237574> \`${prefix}otocevap-liste\` Sunucunuzdaki Özel Komutların Listesini Gösterir.`,true)
.addField(`__Oto Cevap Sil__`,`<:simseq:821416901086806027> \`${prefix}otocevap-sil\` unucunuzdaki Özel Komutu Siler.`,true)
.addField(`__Bilgilendirme__`,`<a:ayarlar:821416196675076207>  \`${prefix}davet\` | Seulex'i Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n   \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/829274706393169942/829326128232923146/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otocevap",
  aliases: []
}
