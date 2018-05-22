const Commando = require("discord.js-commando");
const modRole = require("../../assets/json/settings/modrole.json");

module.exports = class NsfwToggleCommand extends Commando.Command {
  constructor(client) {
    super(client,{
      name:"nsfw",
      group:"mod",
      memberName:"nsfw",
      description:"Toggles NSFW commands",
      userPermissions:["MANAGE_CHANNELS"],
      args: [
        {
          key:"action",
          prompt:"What action do you wanna do? `on` or `off`?",
          type:"string"
        }
      ]
    });
  }

  run (message, args) {
    if (!modRole[message.guild.id]) return message.reply("There are no roles set up for this comamnd to run");
    if (message.member.roles.some(r => modRole[message.guild.id].modroles.includes(r.id)) || message.author.id === message.guild.ownerID) {
      const guild = message.guild;
      args = message.content.split(" ");
      console.log(guild.isGroupEnabled("NSFW"));
      if (args.action.toLowerCase() === "on") {
        if (guild.isGroupEnabled("NSFW") === false) {
          message.channel.send("Enabled!");
          return guild.setGroupEnabled("NSFW", true);
        }
        if (guild.isGroupEnabled("NSFW") === true) {
          return message.channel.send("It is already enabled!");
        }
      } else if (args.action.toLowerCase() === "off") {
        if (guild.isGroupEnabled("NSFW") === true) {
          message.channel.send("Disabled!");
          return guild.setGroupEnabled("NSFW", false);
        }
        if (guild.isGroupEnabled("NSFW") === false) {
          return message.channel.send("It is already disabled!");
        }
      }
    } else return message.reply("You don't have the permissions to execute this command");
  }
};