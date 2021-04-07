


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", `<a:ayarlar:821416196675076207> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:renkliraptiye:821416816353476669>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <:kanal:811645893547393096> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<:dev:809152110037172243>  **Bot Coderi**  <@775687856038871072> \n **DenizG#2432** \n\n <a:bit:809151528610824212> \ **Bot Geliştiricisi**  <@502882124085592065> \n **Yusuf Sesli#5119** \n\n <:kategori:809152540763095100>  **Bot Sahibi**  <@775687856038871072> \n **DenizG#2432** \n :heart: **Bot Destekçileri:** <@796751624823373865>, <@719536627516571658> `)
.addField("__**Sürümler**__", `<a:aagifbase_:785962135565762601> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:Verified:814153668282155058>  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:renklipartner:821416795436482661>  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:an:809151469655425127>  " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setColor("#000000")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}