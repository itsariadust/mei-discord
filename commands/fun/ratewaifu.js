const Commando = require("discord.js-commando");

module.exports = class rateWaifuCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name:"ratewaifu",
      group:"fun",
      memberName:"ratewaifu",
      description:"Rates your waifu, it's either a server member or just an anime character.",
      args: [
        {
          key: "waifu",
          prompt: "Please enter your waifu name, or a member",
          type: "string|member",
        },
      ],
    });
  }

  run(message, {waifu}) {
    message.say(`I would rate ${(waifu.displayName) ? waifu.displayName : waifu} ${Math.floor(Math.random() * 100)}%`);
  }
};
