const { Command } = require("discord.js-commando");
const {MessageEmbed} = require("discord.js");

module.exports = class UserInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name:"userinfo",
      group:"info",
      memberName:"userinfo",
      description:"Displays user info.",
      examples:["userinfo @Eris#6753","userinfo"],
      args: [
        {
          key: 'lookup',
          prompt: 'Who do you want to lookup user info for?',
          type: 'member',
          default: ''
        }
      ]
    });
  }

  run(message, { lookup }) {
      if(lookup === '') lookup = message.member
      const embed = new MessageEmbed()
      .setTitle("Information About" + " " + lookup.displayName)
      .setColor('0xC63D85')
      .setThumbnail(lookup.displayAvatarURL)
      .addField("ID:", lookup.id, true)
      .addField("Status", (lookup.presence.status) ? lookup.presence.status : '???', true)
      .addField("Account Created:", lookup.user.createdAt, true)
      .addField("Joined on:", lookup.joinedAt, true)
      .addField("Server Nickname:", (lookup.nickname) ? lookup.nickname : "???", true)
      .addField("Server Roles:", lookup.roles.map(roles => `${roles.name}`).join(", "))
      return message.embed(embed)

  }
};
