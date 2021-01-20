const Discord = require("discord.js");
const chancejs = require("chance");
const chance = new chancejs();

const cevaplar = ["**YAZI-TURA: __TURA__**", "**YAZI-TURA: __YAZI__**"];

exports.run = function(client, message) {

var Suspect2 = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if (Suspect2 === "YAZI-TURA: __YAZI__**") {

const EmbedSuspect = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(Suspect2)
      .setThumbnail(
        "http://www.freakonomics.com/wp-content/uploads/2013/01/coin-300x218.jpg"
      );

return message.channel.send(EmbedSuspect);

  } else if (Suspect2 === "**YAZI-TURA: __TURA__**") {

    const EmbedSuspect = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(Suspect2)
      .setThumbnail(
        "https://www.wallets-online.com/webadmin/items/ogon/ogon_cd_red_1.jpg"
      );

return message.channel.send(EmbedSuspect);

  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yazıtura",
  description: "Yazı-Tura atar.",
  usage: "yazıtura"
};
