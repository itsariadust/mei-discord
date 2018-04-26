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
    });
  }

  run(message, args, callback) {

    const member = message.mentions.members.first();
    const embed = new RichEmbed();
    const color = 0xC63D85;

    if (!member) {

      embed.setTitle("Information About" + " " + message.author.username);
      embed.setColor(color);
      embed.setThumbnail(message.author.avatarURL);
      embed.addField("ID:", message.author.id, true);
      embed.addField("Status", message.author.presence.status, true);
      embed.addField("Account Created:", message.author.createdAt, true);
      embed.addField("Joined on:", message.member.joinedAt, true);
      embed.addField("Server Nickname:", message.member.nickname !== null ? `${message.member.nickname}` : "No nickname set", true);
      embed.addField("Server Roles:", message.member.roles.map(roles => `${roles.name}`).join(", "));
      return message.embed(embed).then(callback);

    }
    else {

      embed.setTitle("Information About" + " " + member.displayName);
      embed.setColor(color);
      embed.addField("Status", member.presence.status);
      embed.addField("ID:", member.id);
      embed.addField("Account Created:", member.user.createdAt, true);
      embed.addField("Joined on:", member.joinedAt, true);
      embed.addField("Server Nickname:", member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname set", true);
      embed.addField("Server Roles:", member.roles.map(roles => `${roles.name}`).join(", "));
      return message.embed(embed).then(callback);

    }

  }
};
