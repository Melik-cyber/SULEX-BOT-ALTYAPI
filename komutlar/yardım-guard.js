 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Seulex Koruma Komutları`, client.user.avatarURL())
.setColor('#000000')

.addField(`__YAKINDA__`,` <a:carpi:821416413138911272> Bu Komut Çok Yakında Eklenecektir.`)
  .setImage(`https://cdn.discordapp.com/attachments/778629855738462209/797059960072306698/standard_11.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

