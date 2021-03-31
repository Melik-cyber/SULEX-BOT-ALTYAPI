const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#000000")
.setAuthor(`VITA Linkleri:`, client.user.avatarURL())
.setDescription('**• [VITA yı Ekleyin.]($getBotInvite)**\n\n**• [Vitaya Oy Ver](https://top.gg/bot/758751925175844934#/vote)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };