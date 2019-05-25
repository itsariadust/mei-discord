const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class UserInfoCommand extends Commando.Command {

  constructor(client) {
    super(client, {
      name:"userinfo",
      aliases:["info"],
      group:"info",
      memberName:"userinfo",
      description:"Displays user info.",
      examples:["userinfo @Eris#6753", "userinfo"],
      args: [{
        key: "lookup",
        prompt: "Who do you want to lookup user info for?",
        type: "member",
        default: " "
      }]
    });
  }

  run(message, {lookup}) {

    if (lookup === " ") lookup = message.member;
    
    const embed = new RichEmbed();
    let roles = lookup.roles.map(roles => `${roles.name}`).toString().replace('@everyone','everyone');

    embed.setTitle("Information About" + " " + lookup.displayName);
    embed.setColor(0xC63D85);
    embed.setThumbnail(lookup.user.displayAvatarURL);
    embed.addField("ID:", lookup.id, true);
    embed.addField("Status", (lookup.presence.status) ? lookup.presence.status : "???", true);
    embed.addField("Account Created:", lookup.user.createdAt, true);
    embed.addField("Joined on:", lookup.joinedAt, true);
    embed.addField("Server Nickname:", (lookup.nickname) ? lookup.nickname : "???", true);
    embed.addField("Server Roles:", roles);
    return message.embed(embed);
  }
};
