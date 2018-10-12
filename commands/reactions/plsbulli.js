const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class plsbulliCommand extends Command {
  constructor(client) {
    super(client, {
      name:"plsbulli",
      group:"reactions",
      memberName:"plsbulli",
      description:"pls bulli especially Satania",
    });
  }

  run(message) {

    const embed = new MessageEmbed()
      .setImage("https://i.redd.it/20x9tn3ri8h01.png");
    message.embed(embed);

  }

};
