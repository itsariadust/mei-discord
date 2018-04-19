const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class smexGestureCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"smex",
      group:"reactions",
      memberName:"smex",
      description:"*does that gesture*",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("https://i.pinimg.com/originals/c8/d2/68/c8d268fbf65e72ab422165d6df200c07.jpg");
    message.channel.send({embed});

  }

};
