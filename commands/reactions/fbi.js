const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class plsbulliCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"fbi",
      group:"reactions",
      memberName:"fbi",
      description:"The FBI is here",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("https://i.imgflip.com/200xkr.jpg");
    message.channel.send({embed});

  }

};
