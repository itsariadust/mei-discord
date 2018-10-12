const { Command } = require("discord.js-commando");

module.exports = class inviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: "invite",
      group: "core",
      memberName: "invite",
      description: "Invite me!"
    });
  }

  run(message) {
    return message.say('https://discordapp.com/api/oauth2/authorize?client_id=499734554345603072&permissions=0&scope=bot')
  }
};
