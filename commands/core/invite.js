const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class inviteCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "invite",
      group: "core",
      memberName: "invite",
      description: "Invite me!",

    });

  }

  run(message, callback) {

    const embed = new RichEmbed();
    embed.addField("Invite me!", "https://discordapp.com/oauth2/authorize?&client_id=432365216593084426&scope=bot&permissions=0");
    return message.embed(embed).then(callback);

  }

};
