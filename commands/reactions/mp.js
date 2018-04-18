const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class mpCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"mp",
      group:"reactions",
      memberName:"mp",
      description:"Military police, we have a severe case of lolicon here",

    });

  }

  run(message) {

    const embed = new RichEmbed()
      .setImage("https://i.imgur.com/Cez6Gy4.jpg");
    message.channel.send({embed});

  }

};
