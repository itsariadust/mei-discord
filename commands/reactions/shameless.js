const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class shamelessPervCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"shameless",
      group:"reactions",
      memberName:"shameless",
      description:"Shameless pervert",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("https://pa1.narvii.com/5824/b9aeeecb706c61b7c5c6584945be6aec28acfc5c_hq.gif");
    message.channel.send({ embed });

  }

};
