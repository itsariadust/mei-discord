const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
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

  run(message, {member,banMsg,pruneDays}) {
    if (!modRole[message.guild.id]) return message.reply("There are no roles set up for this command to run");
    if (!message.member.roles.some(r => modRole[message.guild.id].modroles.includes(r.id)) && message.author.id !== message.guild.ownerID) {
      return message.reply("You don't have the permissions to execute this command");
    }
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("Can't ban anyone. I need the **Ban Members** permission.");
    if (member.user.id === this.client.user.id) return message.reply("Why would I ban myself? Do it manually.");
    if (!member.kickable) return message.reply("**Error:** User can't be banned. Make sure that my highest role is above the user you are trying to kick.");

    if (message.member.roles.some(r =>  modRole[message.guild.id].modroles.includes(r.id)) || message.author.id === message.guild.ownerID) {
      message.channel.send("Are you sure you want to ban this person? Type `confirm` to execute ban.").then(() => {
        message.channel.awaitMessages(response => response.content === "confirm", {
          max: 1,
          time: 30000,
          errors: ["time"],
        })
          .then(() => {
            member.send(stripIndents`You have been banned in the server: ${message.guild.name}! "Reason: "${banMsg}"`);
            message.delete();
            message.guild.ban(member, {
              days: pruneDays,
              reason: banMsg
            }).then(member => {
              if (!message.guild.settings.get("modlog")) {
                return message.say("Done");
              } else {
                const embed = new RichEmbed();
                embed.setTitle("Member Banned");
                embed.setAuthor(`${member.user.username}#${member.user.discriminator} (${member.user.id})`, member.user.avatarURL);
                embed.addField("Member banned", `Reason: ${banMsg}`);
                embed.setTimestamp(message.createdTimestamp);
                return message.embed(embed);
              }
            });
          })
          .catch(() => {
            message.channel.send();
          });
      });
    }
  }
};