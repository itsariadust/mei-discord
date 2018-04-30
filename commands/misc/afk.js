const Commando = require("discord.js-commando");
const stripIndents = require("common-tags").stripIndents;
const afk = require("../../settings/afk.json");

module.exports = class AfkCommand extends Commando.Command {
  constructor (client) {
    super (client, {
      name:"afk",
      group:"misc",
      memberName:"afk",
      description:"sets your status to afk",
      args:[
        {
          key:"afkMsg",
          prompt:"What is your AFK message",
          type:"string",
          default:""
        }
      ]
    });
  }

  run (message, args) {
    if (afk[message.author.id].afk === true) {
      afk[message.author.id].afk = false;
      return message.say("Your AFK status is removed");
    } else if (afk[message.author.id]) {
      afk[message.author.id].afk = true;
      afk[message.author.id].status = args;
      afk[message.author.id].id = message.author.id;

      return message.say(stripIndents`
      I have set your AFK status to true
      Status: ${JSON.stringify(afk[message.author.id].status.afkMsg)}
      `);
    }
  }
};