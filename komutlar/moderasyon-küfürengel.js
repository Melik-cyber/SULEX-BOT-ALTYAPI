
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`<a:carpi:821416413138911272>  **Bu  kullanabilmek için YÖNETİCİ yetkisine sahip olmanız gerek.**`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`<a:carpi:821416413138911272>  Bunumu Arıyorsun? \n ${prefix}küfür-engel aç/kapat`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '<a:onayl:809153025234305024>  **Küfür Engel Aktif!**')
    let lus = await db.fetch(`kufurE_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
      .setColor("#6278c5")
    .setDescription('<a:onayl:809153025234305024>  **Küfür Engel Başarıyla Açıldı**')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`kufurE_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<a:onayl:809153025234305024>  **Küfür Engel Başarıyla Kapatıldı**')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.config = {
 name: 'küfürengel',
  aliases: ['küfür-engel']

};
