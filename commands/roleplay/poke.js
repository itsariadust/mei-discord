const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class pokeCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "poke",
      group: "roleplay",
      memberName: "poke",
      description: "*pokes*",

    });

  }

  run(message) {

    const pokeIndex = ["https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077","https://media1.tenor.com/images/1236e0d70c6ee3ea91d414bcaf9f3aa4/tenor.gif?itemid=5015314","https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215","https://media1.tenor.com/images/1e0ea8b241a7db2b9c03775133138733/tenor.gif?itemid=10064326","https://media1.tenor.com/images/90f68d48795c51222c60afc7239c930c/tenor.gif?itemid=8701034"];
    const member = message.mentions.members.first();
    const guildMembers = message.guild.members.map(gm => gm.id);
    const randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)];

    if (!member) {
      message.channel.send(message.author.username + " pokes " + "<@" + randMember + ">");
    }
    else {
      message.channel.send(message.author.username + " pokes " + `${member}`);
    }

    const embed = new RichEmbed()
      .setImage(pokeIndex[Math.floor(Math.random() * pokeIndex.length)]);
    message.channel.send({embed});

  }

};
