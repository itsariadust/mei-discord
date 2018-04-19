const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class loliconCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"lolicon",
      group:"reactions",
      memberName:"lolicon",
      description:"You Lolicon!",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("http://i0.kym-cdn.com/photos/images/original/001/085/877/f84.jpg");
    message.channel.send({embed});

  }

};
