const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class plsbulliCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"swat",
      group:"reactions",
      memberName:"swat",
      description:"We just want to talk",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("https://i.imgur.com/aK0hKT5.png");
    message.channel.send({embed});

  }

};
