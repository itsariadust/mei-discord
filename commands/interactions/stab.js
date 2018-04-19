const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class stabCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"stab",
      group:"interactions",
      memberName:"stab",
      description:"You have been stabbed!",

    });

  }

  run(message, args) {

    let stab = ["https://media1.tenor.com/images/aebaa1a854ea1fc04286a8729b3b6cf4/tenor.gif?itemid=5381666"]
    let stabbedMember = message.mentions.members.first();
    let guildMembers = message.guild.members.map(gm => gm.id);
    let randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)]

    if (!stabbedMember) {
      message.channel.send(message.author.username + " stabs " + "<@" + randMember + ">");
    } else {
      message.channel.send(message.author.username + " stabs " + `${stabbedMember}`);
    }

    const embed = new RichEmbed()
      .setImage(stab[Math.floor(Math.random() * stab.length)]);
    message.channel.send({embed});

  }

};
