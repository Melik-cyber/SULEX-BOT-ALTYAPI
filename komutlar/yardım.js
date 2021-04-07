 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Seulex Yardım Menüsü`, client.user.avatarURL())
.setColor('#000000')
.setDescription(`<:a_:821738957997211659>  Lord Creative botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<:simseq:<a:an:809151469655425127>821416901086806027>  \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:ayarlar2:821416212566507520>   \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<:hse:809152333497237574>  \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:an:809151469655425127>  \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:ayarlar:821416196675076207>  \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<:simseq:821416901086806027>  \`${prefix}prefix\` `,true)
  .setImage(`https://cdn.discordapp.com/attachments/829274706393169942/829326128232923146/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}