const Commando = require("discord.js-commando");
const modRole = require("../../assets/json/settings/modrole.json");

module.exports = class PurgeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "purge",
      group: "mod",
      memberName: "purge",
      description: "Purges an amount of message in a channel (Max is 100)",
      clientPermissions: ["MANAGE_MESSAGES"],
      args: [{
        key:"number",
        prompt:"How many message do you want to delete?",
        type:"float"
      }]
    });
  }

  run(message, args) {
    if (!modRole[message.guild.id]) return message.reply("There are no roles set up for this comamnd to run");
    if (message.member.roles.some(r => modRole[message.guild.id].modroles.includes(r.id) || message.author.id === message.guild.ownerID)) {
      message.channel.bulkDelete(args.number);
      return message.delete();
    } else {
      return message.reply("You don't have the permission to execute this command");
    }
  }
};