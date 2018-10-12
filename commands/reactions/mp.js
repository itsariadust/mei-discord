const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class mpCommand extends Command {
  constructor(client) {
    super(client, {
      name:"mp",
      group:"reactions",
      memberName:"mp",
      description:"Military police, we have a severe case of lolicon here",
    });
  }
  
  run(message) {
    const embed = new MessageEmbed()
      .setImage("https://i.imgur.com/Cez6Gy4.jpg");
    message.embed(embed);
  }

};
