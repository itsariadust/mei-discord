const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class hugCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "hug",
      group: "interactions",
      memberName: "hug",
      description: "*hugs*",
    });
  }

  run(message) {
    const hugIndex = ["https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif?itemid=7324587", "https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705", "https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716", "https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif?itemid=5634630", "https://media1.tenor.com/images/b8b017d93d2e24d43f48ac6c63464a9c/tenor.gif?itemid=7552069"];
    const member = message.mentions.members.first();
    const randMember = message.guild.members.random().id;

    if (!member) {
      message.channel.send(message.author.username + " hugs " + "<@" + randMember + ">");
    }
    else {
      message.channel.send(message.author.username + " hugs " + `${member}`);
    }

    const embed = new RichEmbed()
      .setImage(hugIndex[Math.floor(Math.random() * hugIndex.length)]);
    message.channel.send({embed});

  }

};
