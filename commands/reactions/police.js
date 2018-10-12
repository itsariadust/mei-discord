const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class policeCommand extends Command {
  constructor(client) {
    super(client, {
      name:"police",
      group:"reactions",
      memberName:"police",
      description:"*siren*",
    });
  }

  run(message) {

    const police = ["https://media1.tenor.com/images/b87de85650b85bda6342261d516b7482/tenor.gif?itemid=7744617","https://www.mypalmbeachpost.com/rf/image_medium/Pub/Web/PalmBeachPost/Images/STOCK%20BN%20Police%20car%20blurred.jpg"]

    const embed = new MessageEmbed()
      .setImage(police[Math.floor(Math.random() * police.length) + 1]);
    message.embed(embed);

  }

};
