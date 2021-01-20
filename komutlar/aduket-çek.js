const Discord = require("discord.js");

exports.run = function(client, message, args) {

const Suspect = message.mentions.users.first();

if (!Suspect)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin**");

const EmbedSuspect = new Discord.MessageEmbed()

    .setDescription(
      `${Suspect} ` + `**${message.author.username}** Size Aduket Çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(EmbedSuspect);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket-çek"],
  permLevel: 0
};

exports.help = {
  name: "aduketçek",
  description: "Suspect",
  usage: "[prefix]aduket-çek <etiket>"
};
