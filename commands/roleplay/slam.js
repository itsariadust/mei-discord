const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class smalCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"slam",
      group:"roleplay",
      memberName:"slam",
      description:"*slams*",

    });

  }

  run(message) {

    const slam = ["https://media1.tenor.com/images/5f02103ea39728997617592fa3609955/tenor.gif?itemid=5176442", "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956"];
    const slammedMember = message.mentions.members.first();
    const guildMembers = message.guild.members.map(gm => gm.id);
    const randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)];

    if (!slammedMember) {
      message.channel.send(message.author.username + " slams " + "<@" + randMember + ">" + "!");
    }
    else {
      message.channel.send(message.author.username + " slams " + `${slammedMember}` + "!");
    }

    const embed = new RichEmbed()
      .setImage(slam[Math.floor(Math.random() * slam.length)]);
    message.channel.send({ embed });

  }

};
