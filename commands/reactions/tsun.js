const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class plsbulliCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"tsun",
      group:"reactions",
      memberName:"tsun",
      description:"Baka baka baka!",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("https://media.tenor.com/images/99ed452a33c03a91c37083df7eb2419f/tenor.gif");
    message.channel.send({embed});

  }

};
