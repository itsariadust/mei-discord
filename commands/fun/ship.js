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
          key:"shipUser1",
          prompt:"Please mention a member then a second member",
          type:"member",
        },
        {
          key:"shipUser2",
          prompt:"Please mention a second member!",
          type:"member",
        },
      ],
    });
  }

  run(message, args, callback) {
    const love = Math.floor(Math.random() * 100);
    let ship;

    if (love === 100) {
      ship = "Perfect and lovely couple! <3 <3 <3";
    }
    else if (love >= 75) {
      ship = "Great Couple! <3 <3";
    }
    else if (love >= 50) {
      ship = "Nice Couple! <3";
    }
    else if (love >= 25) {
      ship = "Not bad";
    }
    else if (love <= 24) {
      ship = "This won't last...";
    }

    const embed = new RichEmbed();
    embed.setTitle("~Ship Analysis~");
    embed.addField("Shipped Members", `${args.shipUser1} & ${args.shipUser2}`);
    embed.addField("Ship Value", `${love}%\n ${ship}`);
    return message.embed(embed).then(callback);
  }

};
