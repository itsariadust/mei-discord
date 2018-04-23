const Commando = require("discord.js-commando");
const { stripIndents } = require("common-tags");
const moment = require("moment");
require("moment-duration-format");

module.exports = class StatusCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "status",
      group: "info",
      memberName: "status",
      description: "Shows bot statistics like number of guilds the bot is in, the channels the bot is in, the users using the bot, and uptime",
    });
  }

  run(msg) {

    return msg.embed({

      color: 0x3D85C6,
      title: "Mei Statistics",
      fields: [

        {
          name: "Bot Info",
          value: stripIndents`
                    Servers: ${this.client.guilds.size}
                    Channels: ${this.client.channels.size}
                    Users: ${this.client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}`,
          inline: true,
        },
        {
          name: "Uptime",
          value: moment.duration(this.client.uptime).format("d[ days], h[ hours], m[ minutes, and ]s[ seconds]"),
        },

      ],

    });

  }
};
