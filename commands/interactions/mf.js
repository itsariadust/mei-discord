const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class mfCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name:"mf",
      group: "interactions",
      memberName:"mf",
      description:"*does the middle finger*",
    });
  }

  run(message) {
    const mf = ["https://media1.tenor.com/images/48d230e9557c2cc8182c4b0e509ff9cf/tenor.gif?itemid=9733014", "https://media1.tenor.com/images/ca74a9cea9845b1eba6126e5a0aa1d9d/tenor.gif?itemid=9947973"];
    const member = message.mentions.members.first();
    const randMember = message.guild.members.random().id;

    if (!member) {
      message.channel.send(`${message.author.username} gives the middle finger to <@${randMember}>`);
    }
    else {
      message.channel.send(`${message.author.username} gives the middle finger to ${member}`);
    }

    const embed = new RichEmbed()
      .setImage(mf[Math.floor(Math.random() * mf.length)]);
    message.channel.send({embed});

  }

};
