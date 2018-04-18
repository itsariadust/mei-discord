const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class lewdReactCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"lewd",
      group:"reactions",
      memberName:"lewd",
      description:"L-Lewd >///<",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("https://i.imgur.com/qZyrUsn.png");
    message.channel.send({embed});

  }

};
