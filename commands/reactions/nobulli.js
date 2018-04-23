const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class nobulliCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "nobulli",
      group: "reactions",
      memberName: "nobulli",
      description: "Reaction GIF: pls no bulli >.<",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("http://i0.kym-cdn.com/photos/images/original/000/979/749/3d8.gif");
    message.channel.send({ embed });

  }

};
