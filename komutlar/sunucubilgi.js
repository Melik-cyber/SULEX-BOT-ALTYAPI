const Discord = require ('discord.js')
exports.run = async (client, message ,args) => {
  var üyeler = message.guild.members.cache
  const karma = new Discord.MessageEmbed()
  .setTitle(`**${message.guild.name}** Adlı Sunucunun Bilgileri`)//Sunucu İsmi
  .setDescription('')
  .addField('Sunucu Bölge', message.guild.region)
  .addField('Sunucu İd ', message.guild.id)
    .addField('Sunucu Sahip', `<@!${message.guild.owner.id}>`)
  .addField('Üye Sayısı', message.guild.memberCount)//üye sayısı
  .addField('Rol Sayısı', message.guild.roles.cache.size)
  .addField('Kanal Sayısı', message.guild.channels.cache.size)
  .addField('Kategori Sayısı', message.guild.channels.cache.filter(kanal =>kanal.type === 'category').size)
  .addField('Emoji Sayısı', message.guild.emojis.cache.size)
   .addField('**DURUMLAR**',[
        `**Çevrimiçi:** ${üyeler.filter(üye =>üye.presence.status === 'online').size}`,
        `**Boşta:** ${üyeler.filter(üye =>üye.presence.status === 'idle').size}`,
        `**Rahatsız Etmeyin:** ${üyeler.filter(üye =>üye.presence.status === 'dnd').size}`,
        `**Çevrimdışı** ${üyeler.filter(üye =>üye.presence.status === 'offline').size}`
     .setFooter(`Sunucu Kuruluş Tarihi => ${message.guild.createdTimestamp} `)
      ])
  message.channel.send(karma)
};
exports.config = {
  name:"sunucu-bilgi",//by karma
  aliases:["sunucu-bilgi","sunucu","sunucubilgi"]
};