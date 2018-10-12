const Commando = require("discord.js-commando");

module.exports = class SayCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "say",
      aliases: ['echo', 'repeat'],
      group: "fun",
      memberName: "say",
      description: "Make the bot say / repeat something",
      args: [
        {
          key: "text",
          prompt: "What would you like me to repeat?",
          type: "string"
        }
      ]

    });

  }

  run(msg, { text }) {
    msg.delete();
    msg.say(text);
  }
};
