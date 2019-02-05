const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class shipCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name:"ship",
      group:"fun",
      memberName:"ship",
      description:"Ship two members, bots are also welcome",
      args: [
        {
          key:"shipOne",
          prompt:"Please mention a member then a second member",
          type:"member",
        },
        {
          key:"shipTwo",
          prompt:"Please mention a second member!",
          type:"member",
        },
      ],
    });
  }

  run(message, {shipOne, shipTwo}) {
    const love = Math.floor(Math.random() * 100);
    let ship;

    if (love == 100) ship = "Perfect and lovely couple! <3 <3 <3";
    else if (love >= 75) ship = "Great Couple! <3 <3";
    else if (love >= 50) ship = "Nice Couple! <3";
    else if (love >= 25) ship = "Not bad...";
    else if (love <= 24) ship = "This wont last...";

    const embed = new RichEmbed()
      .setTitle("~Ship Analysis~")
      .addField("Shipped Members", `${shipOne.displayName} & ${shipTwo.displayName}`)
      .addField("Ship Value", `${love}% ${ship}`);
    return message.embed(embed)
  }

};
