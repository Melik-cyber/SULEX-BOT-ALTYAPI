const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');
const ayarlar = require('../ayarlar/bot.json');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {

  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
let shardinfo = {
        ping: await client.shard.fetchClientValues('ping'),
        server_count: await client.shard.fetchClientValues('guilds.size'),
        user_count: await client.shard.fetchClientValues('users.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.id
    let shardembed = new Discord.MessageEmbed()
    .setTitle('Seulex Shard İstatistik')
    .setColor("#000000")
    .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
    
    for(i=0;i<client.shard.count;i++) {
        shardembed.addField(`<a:ayarlar:791552216644190208>  **Shard ${i}**`, `<:simseq:821416901086806027>   **Ping:** ${Math.round(shardinfo.ping[i])}ms\n<a:hss:809152421506056223>  **Sunucu:** ${shardinfo.server_count[i]}\n <:hs2:809152270716370944>  **Kullanıcı:** ${shardinfo.user_count[i]}\n <a:ayarlar2:821416212566507520> **Uptime:** ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} \n<a:ayarlar:821416196675076207> **Bu Sunucunun Shardı Id'si**: ${client.shard.id}`, true)
    }
    message.channel.send(shardembed)
}
exports.config = { 
  name: "shard",
  aliases: []
};
