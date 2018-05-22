const commando = require("discord.js-commando");

class SayCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "say",
      group: "fun",
      memberName: "say",
      description: "Make Mei say anything",
      args: [{
        key: "text",
        prompt: "What do you want me to say?",
        type: "string"
      }]
    });
  }
  run(message, args) {
    if (message.mentions.channels.first()) {
      message.delete();
      message.mentions.channels.first().send(args.text.split(" ").slice(1).join(" "));
    } else {
      message.say(args.text);
      message.delete();
    }
  }
}

module.exports = SayCommand;