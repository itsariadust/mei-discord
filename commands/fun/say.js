const Commando = require("discord.js-commando");

module.exports = class SayCommand extends Commando.Command {

  constructor(client) {

    super(client, {
      name: "say",
      group: "fun",
      memberName: "say",
      description: "make the bot say something",
      args: [
        {
          key: "text",
          prompt: "Make the bot say something",
          type: "string",
        },
      ],

    });

  }

  run(msg, args) {
    const { text } = args;
    msg.delete();
    return msg.say(`${text}`);

  }

};
