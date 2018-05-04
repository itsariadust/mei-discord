const Commando = require("discord.js-commando");

module.exports = class SayCommand extends Commando.Command {

  constructor(client) {
    super(client, {
      name: "say",
      group: "fun",
      memberName: "say",
      description: "make the bot say something",
      args: [{
        key: "text",
        prompt: "Make the bot say something",
        type: "string",
      }],
    });
  }

  run(message, args) {
    if (message.mentions.channels.first()) {
      message.delete().catch(console.error);
      message.mentions.channels.first().send(args.text.split(" ").slice(1).join(" "));
    } else {
      message.send(args.text);
      message.delete().catch(console.error);
    }
  }
};