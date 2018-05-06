const Commando = require("discord.js-commando");
const {
  RichEmbed
} = require("discord.js");

module.exports = class BiteCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "bite",
      group: "roleplay",
      memberName: "bite",
      description: "*bites*",
    });
  }

  run(message) {
    const biteIndex = ["https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif?itemid=8259627", "https://media1.tenor.com/images/432a41a6beb3c05953c769686e8c4ce9/tenor.gif?itemid=4704665", "https://media1.tenor.com/images/83271613ed73fd70f6c513995d7d6cfa/tenor.gif?itemid=4915753", "https://media1.tenor.com/images/b917529c89893ca5a281c8d282192248/tenor.gif?itemid=7206416", "https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif?itemid=9051585"];
    const member = message.mentions.members.first();
    const guildMembers = message.guild.members.map(gm => gm.id);
    const randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)];
    if (!member) {
      message.channel.send(message.author.username + " bites " + "<@" + randMember + ">");
    } else {
      message.channel.send(message.author.username + " bites " + `${member}`);
    }
    const embed = new RichEmbed()
      .setImage(biteIndex[Math.floor(Math.random() * biteIndex.length)]);
    message.channel.send({embed});
  }
};