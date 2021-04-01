  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#000000') 
.setAuthor(`Vita Bot Genel Komutlar`, client.user.avatarURL())
.addField(`__Komut Sayısı__`,` <a:an:809151469655425127> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<:a_:821738957997211659>  \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<:a_:821738957997211659>  \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Shard__`,`<:a_:821738957997211659>  \`${prefix}shard\` Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`<:a_:821738957997211659>  \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<:a_:821738957997211659>  \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<:a_:821738957997211659>  \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<:simseq:821416901086806027> \`${prefix}davet\` | Vita'yı Sunucunuza Davet Edersiniz\n  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/778629855738462209/797059960072306698/standard_11.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
