const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('<a:carpi:821416413138911272> **Bu komutu kullanabilmek için `Üyeleri At` yetkisine sahip olmanız gerek.**')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:carpi:821416413138911272>  **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:carpi:821416413138911272>  **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:carpi:821416413138911272>   **Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:carpi:821416413138911272>  **Kendini Kickleyemessin!**');

  const embed = new Discord.MessageEmbed()
  .setColor("#000000")
  .addField('<a:onayl:809153025234305024>  İşlem', 'Sunucudan Kickleme')
  .addField('<a:baybay:821416310855696444>  Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('<a:ayarlar:821416196675076207> Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<:kategori:809152540763095100>  Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#000000")
  .setDescription(`<a:onayl:809153025234305024> **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

