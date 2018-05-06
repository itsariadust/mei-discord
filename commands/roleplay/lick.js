const Commando = require("discord.js-commando");
const {
  RichEmbed
} = require("discord.js");

module.exports = class LickCOmmand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "kiss",
      group: "roleplay",
      memberName: "kiss",
      description: "*kisses*",
    });
  }

  run(message) {
    const kissIndex = ["https://media1.tenor.com/images/5f73f2a7b302a3800b3613095f8a5c40/tenor.gif?itemid=10005495", "https://media1.tenor.com/images/d702fa41028207c6523b831ec2db9467/tenor.gif?itemid=5990650", "https://media1.tenor.com/images/5785566574fe6293e3be673e85d4894b/tenor.gif?itemid=5649365", "https://media1.tenor.com/images/feeef4685f9307b76c78a22ba0a69f48/tenor.gif?itemid=8413059", "https://media1.tenor.com/images/df6d1b4922c131f1d191f022a3dbaf67/tenor.gif?itemid=11357830"];
    const member = message.mentions.members.first();
    const guildMembers = message.guild.members.map(gm => gm.id);
    const randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)];
    if (!member) {
      message.channel.send(message.author.username + " kisses " + "<@" + randMember + ">");
    } else {
      message.channel.send(message.author.username + " kisses " + `${member}`);
    }
    const embed = new RichEmbed()
      .setImage(kissIndex[Math.floor(Math.random() * kissIndex.length)]);
    message.channel.send({embed});
  }
};