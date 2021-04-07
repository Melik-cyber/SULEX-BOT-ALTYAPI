const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Lord Creative - Komut Sayısı`)
    .setDescription('**\n Seulex | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("#000000")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter("Seulex | Gelişmiş Türkçe Bot | 2021" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

