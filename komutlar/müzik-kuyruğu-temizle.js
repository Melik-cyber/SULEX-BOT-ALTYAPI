const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
  
    const embedd = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Seulex | Kuyruğu Temizle")
.setDescription(`<a:mavitik:821416581216600135>  **| Müzik Kuyruğu, ${message.author} tarafından temizlendi.**`) 
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`, client.user.avatarURL());   
  
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 011 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`<a:carpi:821416413138911272>   **| Müzik Kuyruğunu temizleyebilmek için bir ses kanalında olmanız gerekmektedir!**`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`<a:carpi:821416413138911272>  **| Şu anda hiçbir müzik çalmamaktadır!**`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//  
client.player.clearQueue(message.guild.id);
message.channel.send(embedd)
};

module.exports.config = {
    name: "kuyruğu-temizle",
    aliases: ["kuyruk-temizle"]
};
