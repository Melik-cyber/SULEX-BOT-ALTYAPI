 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`VitaCodes ROL AL`, client.user.avatarURL())
.setColor('#000000') 
.addField(`__BDFD Kodları İçin : __`,`<:BDFD:830828954591559711> \`Tıklayabilirsiniz!\``,true)
.addField(`__HTML Kodları İçin : __`,`<:html:830829903146123295>  \`Tıklayabilirsiniz!\` `,true)
.addField(`__DBD.JS Kodları İçin : __`,`<:dbdjs:809151911470039160>  \`Tıklayabilirsiniz!\`  `,true)
.addField(`__Müzik Komutları__`,`<:kategori:809152540763095100>  \`${prefix}müzik\` `,true)
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