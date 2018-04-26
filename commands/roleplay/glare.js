const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class glareCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "glare",
      group: "roleplay",
      memberName: "glare",
      description: "*glares*",

    });

  }

  run(message) {

    const glareIndex = ["https://i.imgur.com/cahrSlM.png"];
    const member = message.mentions.members.first();
    const guildMembers = message.guild.members.map(gm => gm.id);
    const randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)];

    if (!member) {
      message.channel.send(message.author.username + " hugs " + "<@" + randMember + ">");
    }
    else {
      message.channel.send(message.author.username + " hugs " + `${member}`);
    }

    const embed = new RichEmbed()
      .setImage(glareIndex[Math.floor(Math.random() * glareIndex.length)]);
    message.channel.send({
      embed,
    });

  }

};
