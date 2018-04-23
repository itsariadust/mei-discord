const Commando = require("discord.js-commando");

module.exports = class ballCommand extends Commando.Command {

  constructor(client) {
    super(client, {

      name: "8ball",
      group: "fun",
      memberName:"8ball",
      description: "Your favorite 8ball, now in this bot...and in many other bots, just for fun uwu",

    });
  }

  run(message) {

    // taken from https://en.wikipedia.org/wiki/Magic_8-Ball#Possible_answers
    const answer = [

      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful",
      "Ask youself that",

    ];

    message.say(answer[Math.floor(Math.random() * answer.length)]);

  }

};
