const Commando = require("discord.js-commando");

module.exports = class NsfwToggleCommand extends Commando.Command {
  constructor(client) {
    super(client,{
      name:"nsfw",
      group:"mod",
      memberName:"nsfw",
      description:"Toggles NSFW commands",
    });
  }

  run (message, args) {
    const guild = message.guild;
    args = message.content.split(" ");
    console.log(guild.isGroupEnabled("NSFW"));
    if (args[1] === "on") {
      if (guild.isGroupEnabled("NSFW") === false) {
        message.channel.send("Enabled!");
        return guild.setGroupEnabled("NSFW", true);
      }
      if (guild.isGroupEnabled("NSFW") === true) {
        return message.channel.send("It is already enabled!");
      }
    } else if (args[1] === "off") {
      if (guild.isGroupEnabled("NSFW") === true) {
        message.channel.send("Enabled!");
        return guild.setGroupEnabled("NSFW", false);
      }
      if (guild.isGroupEnabled("NSFW") === false) {
        return message.channel.send("It is already disabled!");
      }
    }
  }
};