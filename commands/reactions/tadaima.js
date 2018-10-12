const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class swatCommand extends Command {
  constructor(client) {
    super(client, {
      name:"tadaima",
      group:"reactions",
      memberName:"swat",
      description:"TADAIMA!!!",
    });

  }

  run(message) {

    const embed = new MessageEmbed()
      .setImage("http://i0.kym-cdn.com/photos/images/original/001/066/980/cbd.jpg");
    message.embed(embed);

  }

};
