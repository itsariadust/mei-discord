const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class ServerInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: "serverinfo",
      group: "info",
      memberName: "serverinfo",
      description: "Displays the server info"
    });
  }

  run(message) {

    const vln = message.guild.verificationLevel;
    let vLevel;
    if(vln === 0) vLevel = 'None';
    else if(vln === 1) vLevel = 'Low';
    else if(vln === 2) vLevel = 'Medium';
    else if(vln === 3) vLevel = "High";
    else if(vln === 4) vLevel = "Extreme";
    else if(vln <= 5) vLevel = "Impossible";

    const embed = new MessageEmbed()
    .setAuthor('Mei', this.client.user.displayAvatarURL)
    .setThumbnail(message.guild.iconURL)
    .addField("ID", message.guild.id)
    .addField("Server Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .addField("Verification Level", vLevel)
    .addField("Region", message.guild.region)
    .addField("Channels", message.guild.channels.size, true)
    .addField("Members", message.guild.memberCount, true)
    .addField("Created On", message.guild.createdAt)
    .addField("Roles", message.guild.roles.size)

    return message.embed(embed)

  }

};
