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
.addField(`__Python Kodları İçin : __`,`<:python:830829016797020161>  \`Tıklayabilirsiniz!\` `,true)
.addField(`__JS Kodları İçin : __`,`<:nodejs:830828876900597800>  \`Tıklayabilirsiniz!\`  `,true)
.addField(`__Altyapılar İçin : __`,`<a:ayarlar2:821416212566507520>  \`Tıklayabilirsiniz!\`  `,true)
.addField(`__JS İçin Eklenti Komutları : __`,`<:1reis:821416169985540106>  \`Tıklayabilirsiniz!\`  `,true)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "code",
  aliases: []
}