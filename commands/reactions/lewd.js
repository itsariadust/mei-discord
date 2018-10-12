const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class lewdReactCommand extends Command {
  constructor(client) {
    super(client, {
      name:"lewd",
      group:"reactions",
      memberName:"lewd",
      description:"L-Lewd >///<",
    });
  }

  run(message) {
    const embed = new MessageEmbed()
      .setImage("https://i.imgur.com/qZyrUsn.png");
    message.embed(embed);

  }

};
