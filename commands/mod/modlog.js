const Commando = require("discord.js-commando");

module.exports = class ModLogSetCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "modlog",
      group: "mod",
      memberName: "modlog",
      description: "Sets the modlog channel for the moderator commands",
      args: [{
        key: "action",
        prompt: "What action would you like to perform? `add` or `remove`",
        type: "string"
      }]
    });
  }

  run(message, args) {
    if (args.action.toLowerCase() === "add") {
      let channel = message.mentions.channels.first();
      if (!channel) return message.reply("Please specify a channel");

      let channelID = channel.id;
      message.guild.settings.set("modlog", channelID);
      return message.reply(`Done. Set the mod log channel to "<#${message.guild.settings.get("modlog")}>"`);
    }

    if (args.action.toLowerCase() === "remove") {
      message.guild.settings.remove("modlog");
      return message.reply(`Done. Removed the modlog channel. Do \`${message.guild.commandPrefix}settings add modlog\` to set a new channel for modlogging`);
    }
  }
};