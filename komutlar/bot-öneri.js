const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("• Hata: 0014 •")
.setDescription("<:dnd:809151992420761641> Öneri gönderebilmek için bir öneri belirtiniz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`);

const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Vita | Başarılı")
.setDescription("<a:onayl:809153025234305024> Öneriniz alınmıştır! Teşekkür ederiz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`);  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "807524109331333120"; // Sunucu ID
 
  var channelID = "807531657875423283"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("000000")
 
      .setAuthor("<a:onayl:809153025234305024>  Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("<a:onayl:809153025234305024> • Öneren Kullanıcı:", message.author.tag, true)
 
      .addField("<a:onayl:809153025234305024> • Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("<a:onayl:809153025234305024> • Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 