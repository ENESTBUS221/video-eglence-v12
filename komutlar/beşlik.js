const Discord = require("discord.js");

exports.run = function(client, message, args) {

const Suspect = message.mentions.users.first();

if (!Suspect) return message.reply("Beşlik Çakacağın Kişiyi Etiketlemelisin");

const EmbedSuspect = new Discord.MessageEmbed()

    .setDescription(
      `${Suspect} ` + `ve **${message.author.username}** Beşlik Çaktı`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif"
    )
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
  
 return message.channel.send(EmbedSuspect);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beşlikçak"],
  permLevel: 0
};
exports.help = {
  name: "beşlik",
  description: "Etiketlediğiniz Kişiyle Beşlik Çakarsınız",
  usage: ""
};
