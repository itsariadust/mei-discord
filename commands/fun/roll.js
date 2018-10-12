const { Command } = require("discord.js-commando");

module.exports = class RollCommand extends Command {
  constructor(client){
    super(client, {
      name: "roll",
      group: "fun",
      memberName: "roll",
      description: "Rolls a die, values are at random from 1-6",
    });
}

  run(message) {

    message.reply(`You rolled a ${Math.floor(Math.random() * 6) + 1}`);
  }
}
