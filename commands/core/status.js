const {Command} = require("discord.js-commando");
const {MessageEmbed} = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = class StatusCommand extends Command {
  constructor(client) {
    super(client, {
      name: "status",
      aliases: ["stats"],
      group: "info",
      memberName: "status",
      description: "Shows bot statistics like number of guilds the bot is in, the channels the bot is in, the users using the bot, and uptime",
    });
  }

  run(msg) {
    const embed = new MessageEmbed()
      .setTitle("Mei Statistics")
      .setColor("0x3D85C6")
      .addField("­", `Servers: ${this.client.guilds.size}\nChannels: ${this.client.channels.size}`, true)
      .addField("­", `Users: ${this.client.users.size}\nUptime: ${moment.duration(this.client.uptime).format("d[ days], h[ hours], m[ minutes, and ]s[ seconds]")}`, true);
    return msg.embed(embed);
  }
};