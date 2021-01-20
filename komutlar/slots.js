const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const { stripIndents } = require("common-tags");

const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

exports.run = function(client, message) {

var Suspect = slots[Math.floor(Math.random() * slots.length)];
var Suspect2 = slots[Math.floor(Math.random() * slots.length)];
var Suspect3 = slots[Math.floor(Math.random() * slots.length)];

  if (Suspect === Suspect2 && Suspect === Suspect) { return message.channel.send(stripIndents`**Tebrikler, kazandınız!** \n\n${Suspect} **:** ${Suspect2} **:** ${Suspect3}`);

  } else {
   return message.channel.send(stripIndents`**Eyvah, kaybettin!** \n\n${Suspect} **:** ${Suspect} **:** ${Suspect}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};
