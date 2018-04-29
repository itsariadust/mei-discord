const Commando = require("discord.js-commando");

module.exports = class WarnCommand extends Commando.Command {
  constructor(client) {
    super (client,{
      name:"warn",
      group:"mod",
      memberName:"warn",
      description:"Warns a member",
      userPermissions:["MANAGE_GUILD","ADMINISTRATOR"],
      args:[
        {
          key:"member",
          prompt:"Please mention a member to warn",
          type:"member"
        },
        {
          key:"warningMsg",
          prompt:"Please enter a warning message.",
          type:"string"
        }
      ]
    });
  }

  run (message, { member, warningMsg }) {
    member.send("You have been warned for" + " " + `${warningMsg}`);
    return message.say("Done");
  }
};