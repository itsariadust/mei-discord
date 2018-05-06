const Commando = require("discord.js-commando");
const {
  RichEmbed,
} = require("discord.js");

module.exports = class cuddleCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "cuddle",
      group: "roleplay",
      memberName: "cuddle",
      description: "*cuddles*",

    });

  }

  run(message) {

    const cuddleIndex = ["https://media1.tenor.com/images/08de7ad3dcac4e10d27b2c203841a99f/tenor.gif?itemid=4885268", "https://media1.tenor.com/images/7dc851c5531d26c0dfa5c62683c211e4/tenor.gif?itemid=4998184", "https://media1.tenor.com/images/d0c2e7382742f1faf8fcb44db268615f/tenor.gif?itemid=5853736", "https://media1.tenor.com/images/f73332aa4c013d56f5167efbcc5461d9/tenor.gif?itemid=9383130", "https://media1.tenor.com/images/20ecc3af6a5523872854a7bc2c083b7e/tenor.gif?itemid=9032323"];
    const member = message.mentions.members.first();
    const guildMembers = message.guild.members.map(gm => gm.id);
    const randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)];

    if (!member) {
      message.channel.send(message.author.username + " cuddles " + "<@" + randMember + ">");
    }
    else {
      message.channel.send(message.author.username + " cuddles " + `${member}`);
    }

    const embed = new RichEmbed()
      .setImage(cuddleIndex[Math.floor(Math.random() * cuddleIndex.length)]);
    message.channel.send({embed});

  }

};
