const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#000000")
.setAuthor(`Seulex Linkleri:`, client.user.avatarURL())
.setDescription('**• [Seulexi Ekleyin.](ağla nah eklersin )**\n\n**• [Seulexe Oy Ver](eğeğeğeğeğeğeğeğeğeğeğeğ.com)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };