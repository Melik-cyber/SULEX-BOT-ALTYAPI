  module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:carpi:821416413138911272>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  if (reason.length < 1)
    return message.reply("<a:carpi:821416413138911272> Ban sebebini yazmalısın.").then(m => m.delete(3000));
  if (message.mentions.users.size < 1)
    return message
      .reply("<a:carpi:821416413138911272> Kimi banlayacağını yazmalısın.")
      .catch(console.error)
      .then(m => m.delete(3000));
  if (!message.guild.member(user).bannable)
    return message.reply("<a:carpi:821416413138911272> Yetkilileri banlayamam.").then(m => m.delete(3000));
  var fetched = await message.channel.fetchMessages({ limit: 99 });
  if (user) {
    var fetched = fetched
      .filter(m => m.author.id === user.id)
      .array()
      .slice(0, 99);
  }
  message.channel.bulkDelete(fetched);
  message.guild.ban(user, 2);
  message.channel
    .send(
      `<a:onayl:809153025234305024> ${user} kullanıcısının son 99 mesajını temizleyerek \`${reason}\` sebebi ile banladım!`
    )
    .then(m => m.delete(3000))
    .catch(error =>
      message.channel.send("<a:carpi:821416413138911272> 14 günden önceki mesajlar silinmemektedir!")
    )
    .then(m => m.delete(3000));
};
exports.config = {
  name: "soft-ban",
  aliases: ["softban"]
};


