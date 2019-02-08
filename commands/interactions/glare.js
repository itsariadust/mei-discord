const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class glareCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "glare",
      group: "interactions",
      memberName: "glare",
      description: "*glares*",
    });
  }

  run(message) {
    const glareIndex = ["https://i.imgur.com/cahrSlM.png"];
    const member = message.mentions.members.first();
    const randMember = message.guild.members.random().id;

    if (!member) {
      message.channel.send(message.author.username + " hugs " + "<@" + randMember + ">");
    }
    else {
      message.channel.send(message.author.username + " hugs " + `${member}`);
    }

    const embed = new RichEmbed()
      .setImage(glareIndex[Math.floor(Math.random() * glareIndex.length)]);
    message.channel.send({embed});

  }

};
