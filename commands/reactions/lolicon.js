const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class loliconCommand extends Command {
  constructor(client) {
    super(client, {
      name:"lolicon",
      group:"reactions",
      memberName:"lolicon",
      description:"You Lolicon!",
    });
  }

  run(message) {

    const embed = new MessageEmbed()
      .setImage("http://i0.kym-cdn.com/photos/images/original/001/085/877/f84.jpg");
    message.embed(embed);

  }

};
