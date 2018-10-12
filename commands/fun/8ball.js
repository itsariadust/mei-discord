const { Command } = require("discord.js-commando");
const eightBall = require('../../assets/json/eight_ball.json').answer

module.exports = class ballCommand extends Command {
  constructor(client) {
    super(client, {
      name: "8ball",
      group: "fun",
      memberName:"8ball",
      description: "Your favorite 8ball, now in this bot...and in many other bots, just for fun uwu"
    });
  }
  run (message) {
    message.say(eightBall[Math.floor(Math.random() * eightBall.length)]);
  }
};
