const Commando = require("discord.js-commando");
const RichEmbed = require("discord.js");

module.exports = class ServerInfoCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "serverinfo",
      group: "utility",
      memberName: "serverinfo",
      description: "Displays the server info"

    });

  }

  run() {

    const embed = new RichEmbed();
    embed.setTitle("Guild Information");

  }

};
