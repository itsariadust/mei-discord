const Commando = require("discord.js-commando");
const answer = require("../../assets/json/8ball.json");
const { stripIndents } = require("common-tags");

module.exports = class ballCommand extends Commando.Command {

  constructor(client) {
    super(client, {

      name: "8ball",
      group: "fun",
      memberName:"8ball",
      description: "Your favorite 8ball, now in this bot...and in many other bots, just for fun uwu",
      args:[
        {
          key:"question",
          prompt:"Ask 8ball a question. Usage: `m!8ball <question>`",
          type:"string"
        }
      ]

    });
  }

  run(message, {question}) {
    if (`${question}`) {
      message.say(`${question}`);
      return message.say(stripIndents`
      ${answer[Math.floor(Math.random() * answer.length)]}, ${message.author.username}
      `);
    }
  }

};
