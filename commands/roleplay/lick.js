const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class LickCOmmand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "lick",
      group: "roleplay",
      memberName: "lick",
      description: "*licks*",
    });
  }

  run(message) {
    const lickIndex = ["https://media1.tenor.com/images/5f73f2a7b302a3800b3613095f8a5c40/tenor.gif?itemid=10005495", "https://media1.tenor.com/images/d702fa41028207c6523b831ec2db9467/tenor.gif?itemid=5990650", "https://media1.tenor.com/images/5785566574fe6293e3be673e85d4894b/tenor.gif?itemid=5649365", "https://media1.tenor.com/images/feeef4685f9307b76c78a22ba0a69f48/tenor.gif?itemid=8413059", "https://media1.tenor.com/images/df6d1b4922c131f1d191f022a3dbaf67/tenor.gif?itemid=11357830"];
    const member = message.mentions.members.first();
    const randMember = message.guild.members.random().id;

    if (!member) {
      message.channel.send(message.author.username + " kisses " + "<@" + randMember + ">");
    } else {
      message.channel.send(message.author.username + " kisses " + `${member}`);
    }
    const embed = new RichEmbed()
      .setImage(lickIndex[Math.floor(Math.random() * lickIndex.length)]);
    message.channel.send({embed});
  }
};