const Commando = require("discord.js-commando");
const cat = require("random-cat");

module.exports = class CatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name:"cat",
      group:"images",
      memberName:"cat",
      description:"Posts a random cat image",
    });
  }

  run(message) {
    try {
      let url = cat.get();
      message.say(url);
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
};