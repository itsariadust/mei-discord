const Commando = require("discord.js-commando");
const stripIndents = require("common-tags").stripIndents;
const modRole = require("../../assets/json/modrole.json");

module.exports = class KickCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "kick",
      group: "mod",
      memberName: "kick",
      description: "kicks a member",
      clientPermissions: ["KICK_MEMBERS"],
      args: [{
        key: "member",
        prompt: "Please mention a member to ban",
        type: "member"
      },
      {
        key: "kickMsg",
        prompt: "Please enter a kick reason.",
        type: "string"
      },
      ]
    });
  }

  run(message, args) {
    if (message.member.roles.some(r => modRole[message.guild.id].modroles.includes(r.id)) || message.author.id === message.guild.ownerID) {
      message.guild.member(args.member).kick(args.kickMsg).then(member => {
        member.send(stripIndents `
        You have been kicked in the server: ${message.guild.name}!
        "Reason: "${args.banMsg} -${message.author.tag}"
        `);
        message.delete();
        return message.say("Done");
      });
    } else {
      return message.reply("You don't have the permissions to execute this command");
    }
  }
};