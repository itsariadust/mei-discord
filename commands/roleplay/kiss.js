const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class kissCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "kiss",
      group: "roleplay",
      memberName: "kiss",
      description: "*kisses*",
    });
  }

  run(message) {

    const kissIndex = ["https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865", "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670", "https://media1.tenor.com/images/7fd98defeb5fd901afe6ace0dffce96e/tenor.gif?itemid=9670722", "https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649", "https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409"];
    const member = message.mentions.members.first();
    const randMember = message.guild.members.random().id;

    if (!member) {
      message.channel.send(message.author.username + " kisses " + "<@" + randMember + ">");
    }
    else {
      message.channel.send(message.author.username + " kisses " + `${member}`);
    }

    const embed = new RichEmbed()
      .setImage(kissIndex[Math.floor(Math.random() * kissIndex.length)]);
    message.channel.send({embed});

  }

};
