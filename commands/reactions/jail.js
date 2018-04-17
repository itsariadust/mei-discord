const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class plsbulliCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"jail",
      group:"reactions",
      memberName:"jail",
      description:"Jail is just a room",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("https://cdn.boldomatic.com/content/post/x6MEAg/Age-is-just-a-number-yeah-and-jail-is-just-a-room?size=800");
    message.channel.send({embed});

  }

};
