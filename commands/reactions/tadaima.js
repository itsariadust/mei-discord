const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class swatCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"tadaima",
      group:"reactions",
      memberName:"swat",
      description:"TADAIMA!!!",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("http://i0.kym-cdn.com/photos/images/original/001/066/980/cbd.jpg");
    message.channel.send({ embed });

  }

};
