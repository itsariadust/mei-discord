const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class petCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name: "pet",
      aliases: ["pat"],
      group: "roleplay",
      memberName: "pet",
      description: "*pets*",

    });

  }

  run(message) {

    const petIndex = ["https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932", "https://media1.tenor.com/images/f79a9ec48bde0e592e55447b17ecfbad/tenor.gif?itemid=8053566", "https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif?itemid=5081286", "https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915", "https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif?itemid=7394758", "https://media1.tenor.com/images/d9b480bcd392d05426ae6150e986bbf0/tenor.gif?itemid=9332926"];
    const member = message.mentions.members.first();
    const randMember = message.guild.members.random().id;

    if (!member) {
      message.channel.send(message.author.username + " pets " + "<@" + randMember + ">");
    }
    else {
      message.channel.send(message.author.username + " pets " + `${member}`);
    }

    const embed = new RichEmbed()
      .setImage(petIndex[Math.floor(Math.random() * petIndex.length)]);
    message.channel.send({embed});

  }

};
