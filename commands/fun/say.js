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
  
  run(message, {text}) {
    if (message.mentions.channels.first()) {
      message.mentions.channels.first().send(text.split(" ").slice(1).join(" "));
      message.delete();
    } else {
      message.say(text);
      message.delete();
    }
  }
}

module.exports = SayCommand;