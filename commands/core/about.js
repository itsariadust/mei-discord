const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class AboutCommand extends Command {
  constructor(client) {
    super(client, {
      name: "about",
      group: "core",
      memberName: "about",
      description: "Gives bot information"
    });
  }

  run (message) {
    const embed = new MessageEmbed()
    .setTitle("About Mei")
    .setColor('0x551A8B')
    .setDescription(`Mei is a discord bot made by Eris#6753 using discord.js. Commands handled by discord.js-commando. For help please type \`${process.env.MEI_PREFIX}help\``)
    .addField("Owner","Eris#6753")
    .addField("Version","v1.1.3")
    return message.embed(embed)
  }
};
