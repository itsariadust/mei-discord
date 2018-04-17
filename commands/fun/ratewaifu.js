const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class rateWaifuCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"ratewaifu",
      group:"fun",
      memberName:"ratewaifu",
      description:"Rates your waifu, it's either a server member or just an anime character.",
      args: [
        {
          key:"waifu",
          prompt:"Please enter your waifu name, or a member",
          type:"string"
        }
      ]

    });

  }

  run(message, args) {

    const { waifu } = args;
    const waifuRate = Math.floor(Math.random() * 100);
    message.say("I would rate" + " " + waifu + " " + "a" + " " + waifuRate + "%");

  }

};
