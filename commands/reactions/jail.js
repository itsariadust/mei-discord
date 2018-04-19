const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class jailCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"jail",
      group:"reactions",
      memberName:"jail",
      description:"Jail is over there onii-chan",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("http://i0.kym-cdn.com/photos/images/original/001/271/516/407.jpg");
    message.channel.send({embed});

  }

};
