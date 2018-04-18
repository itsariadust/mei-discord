const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class AboutCommand extends Commando.Command {
  constructor(client) {
    super(client, {

      name: "about",
      group: "core",
      memberName: "about",
      description: "Gives bot information"

    });
  }

  run (msg, args, callback) {

    const embed = new RichEmbed();
    embed.setTitle("About Mei");
    embed.setColor(0x551A8B);
    embed.setDescription("Mei is a discord bot made by Eris#6753 using discord.js. Commands handled by discord.js-commando. Bot is still under construction");
    embed.addField("Owner","Eris#6753");
    embed.addField("Version","v1.0.2");
    return msg.embed(embed).then(callback);

  }
};
