const Commando = require("discord.js-commando");
const modRole = require("../../assets/json/settings/modrole.json");

module.exports = class ModLogSetCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "modlog",
      group: "mod",
      memberName: "modlog",
      description: "Sets the modlog channel for the moderator command output",
      args: [{
        key: "action",
        prompt: "What action would you like to perform? `add` or `remove`",
        type: "string"
      }]
    });
  }

  run(message, args) {
    if (!modRole[message.guild.id]) return message.reply("There are no roles set up for this comamnd to run");
    
    if (message.member.roles.some(r => modRole[message.guild.id].modroles.includes(r.id)) || message.author.id === message.guild.ownerID) {
      if (args.action.toLowerCase() === "add" || "set") {
        let channel = message.mentions.channels.first();
        if (!channel) return message.reply("Please specify a channel");

        let channelID = channel.id;
        message.guild.settings.set("modlog", channelID);
        return message.reply(`Done. Modlog channel set to "<#${message.guild.settings.get("modlog")}>"`);
      }

      if (args.action.toLowerCase() === "remove") {
        message.guild.settings.remove("modlog");
        return message.reply(`Done. Removed the modlog channel. Do \`${message.guild.commandPrefix}settings add modlog\` to set a new channel for modlogging`);
      }
    } else {
      return message.reply("You don't have the permissions to run this command. Do you have the roles for the moderator commands? Please contact the server owner to fix this");
    }
  }
};