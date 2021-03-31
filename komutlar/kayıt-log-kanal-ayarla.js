const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:carpi:821416413138911272>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
 if(!kanal) return message.channel.send(`<a:carpi:821416413138911272>  **Bu Özelliği Ayarlayabilmek İçin Bir Kanal Etiketlemelisin!**\n**__Örnek__**: ${prefix}kayıt-log-kanal-ayarla \`#kayıtLogKanal\``)
 
  message.channel.send(`<a:onayl:809153025234305024>  **Kayıt Log Kanalı** \`${kanal}\` olarak ayarlandı! `)

 
    db.set(`kayitLog_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'kayıt-log-kanal-ayarla', 
  aliases: []
};
