const Commando = require("discord.js-commando");
const {RichEmbed} = require("discord.js");

module.exports = class UserInfoCommand extends Commando.Command {

  constructor(client) {
    super(client, {
      name:"userinfo",
      group:"info",
      memberName:"userinfo",
      description:"Displays user info.",
      examples:["userinfo @Eris#6753","userinfo"],
    });
  }

  run(message, args, callback) {

    let member = message.mentions.members.first();
    const embed = new RichEmbed();
    var color = 0xC63D85;

    if (!member) {

      embed.setTitle("Information About" + " " + message.author.username);
      embed.setColor(color);
      embed.addField("ID:", message.member.id);
      embed.addField("Status", message.member.presence.status);
      embed.addField("Joined in Discord:", message.author.createdAt, true);
      embed.addField("Joined in server:", message.member.joinedAt, true);
      embed.addField("Server Nickname:", message.member.nickname !== null ? `Nickname: ${message.member.nickname}` : "No nickname set", true);
      embed.addField("Server Roles:", message.member.roles.map(roles => `${roles.name}`).join(", "));
      return message.embed(embed).then(callback);

    } else {

      embed.setTitle("Information About" + " " + member.displayName);
      embed.setColor(color);
      embed.addField("Status", member.presence.status);
      embed.addField("ID:", member.id);
      embed.addField("Joined in Discord:", member.user.createdAt, true);
      embed.addField("Joined in server:", member.joinedAt, true);
      embed.addField("Server Nickname:", member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname set", true);
      embed.addField("Server Roles:", member.roles.map(roles => `${roles.name}`).join(", "));
      return message.embed(embed).then(callback);

    }

  }
};
