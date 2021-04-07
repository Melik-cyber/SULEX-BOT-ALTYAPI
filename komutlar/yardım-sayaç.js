 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Seulex Sayaç Komutları`, client.user.avatarURL())
.setColor('#000000')
.setDescription(`<:simseq:821416901086806027>  Seulex botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç Ayarla__`,`<a:ayarlar2:821416212566507520> \`${prefix}sayaç-ayarla\` Sunucunuzda Sayacı Ayarlar.`,true)
.addField(`__Oto Cevap Liste__`,`<:hse:809152333497237574>  \`${prefix}sayaç-hg-mesaj\` Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.`,true)
.addField(`__Oto Cevap Sil__`,`<:simseq:821416901086806027>  \`${prefix}sayaç-bb-mesaj\` Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.`,true)
  .setImage(`https://cdn.discordapp.com/attachments/829274706393169942/829326128232923146/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "sayaç",
  aliases: []
}