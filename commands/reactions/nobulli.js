const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class nobulliCommand extends Command {
  constructor(client) {
    super(client, {
      name: "nobulli",
      group: "reactions",
      memberName: "nobulli",
      description: "Reaction GIF: pls no bulli >.<"
    });
  }

  run(message) {

    const embed = new MessageEmbed()
      .setImage("http://i0.kym-cdn.com/photos/images/original/000/979/749/3d8.gif");
    message.embed(embed);

  }

};
