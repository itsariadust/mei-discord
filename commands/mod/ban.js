const Commando = require("discord.js-commando");
const stripIndents = require("common-tags").stripIndents;
const modRole = require("../../assets/json/settings/modrole.json");

module.exports = class BanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "ban",
      group: "mod",
      memberName: "ban",
      description: "bans a member",
      clientPermissions: ["BAN_MEMBERS"],
      args: [{
        key: "member",
        prompt: "Please mention a member to ban",
        type: "member"
      },
      {
        key: "banMsg",
        prompt: "Please enter a ban message/reason.",
        type: "string"
      },
      {
        key: "pruneDays",
        prompt: "How many days worth of messages would you like to delete? (Maximum of 7 days. Deafult is 7 days when no value is included)",
        type: "float",
        default:""
      },
      ]
    });
  }

  run(message, args) {
    if (!modRole[message.guild.id]) return message.reply("There are no roles set up for this comamnd to run");
    if (message.member.roles.some(r =>  modRole[message.guild.id].modroles.includes(r.id)) || message.author.id === message.guild.ownerID) {
      message.guild.ban(args.member, {
        days: args.pruneDays,
        reason: args.banMsg
      }).then(member => {
        member.send(stripIndents`
        You have been banned in the server: ${message.guild.name}!
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