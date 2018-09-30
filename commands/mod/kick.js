const Commando = require("discord.js-commando");
const stripIndents = require("common-tags").stripIndents;
const modRole = require("../../assets/json/settings/modrole.json");

module.exports = class KickCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "kick",
      group: "mod",
      memberName: "kick",
      description: "kicks a member",
      args: [{
        key: "member",
        prompt: "Please mention a member to ban",
        type: "member"
      },
      {
        key: "kickMsg",
        prompt: "Please enter a kick reason.",
        type: "string",
        default: ""
      },
      ]
    });
  }

  run(message, args) {
    const { member, kickMsg } = args;

    if (!modRole[message.guild.id]) return message.reply("There are no roles set up for this command to run");
    if (!message.member.roles.some(r => modRole[message.guild.id].modroles.includes(r.id)) && message.author.id !== message.guild.ownerID) {
      return message.reply("You don't have the permissions to execute this command");
    }
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("Can't kick anyone. I need the **Kick Members** permission.");
    if (member.user.id === this.client.user.id) return message.reply("Why would I kick myself? Do it manually.");
    if (!member.kickable) return message.reply("**Error:** User can't be kicked out. Make sure that my highest role is above the user you are trying to kick.");

    member.kick(kickMsg).then(member => {
      if (kickMsg !== "") {
        member.send(stripIndents `
        You have been kicked in the server: ${message.guild.name}!
        Reason: "${kickMsg}"`);
      } else {
        member.send(`You have been kicked from ${message.guild.name}`);
      }
      message.delete();
      return message.say(`Done. ${member.user.username}#${member.user.discriminator} has been kicked.`);
    });
  }
};