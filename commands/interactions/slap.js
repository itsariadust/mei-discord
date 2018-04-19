const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class slapCommand extends Commando.Command {

  constructor(client) {

    super(client, {

      name:"slap",
      group:"interactions",
      memberName:"slap",
      description:"You have been slapped!",

    });

  }

  run(message, args) {

    let slap = ["https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956","https://media1.tenor.com/images/fd14f63a93796ed26bd385c015df57b8/tenor.gif?itemid=4665506","https://media1.tenor.com/images/1cf84bf514d2abd2810588caf7d9fd08/tenor.gif?itemid=7679403","https://media1.tenor.com/images/0a3e109296e16977a61ed28c1e5bf7bf/tenor.gif?itemid=5122897","https://media1.tenor.com/images/4eed54377433c396ce2d9ad9ee5d22ef/tenor.gif?itemid=11234788"]
    let slappedMember = message.mentions.members.first();
    let guildMembers = message.guild.members.map(gm => gm.id);
    let randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)]

    if (!slappedMember) {
      message.channel.send(message.author.username + " slaps " + "<@" + randMember + ">");
    } else {
      message.channel.send(message.author.username + " slaps " + `${slappedMember}`);
    }

    const embed = new RichEmbed()
      .setImage(slap[Math.floor(Math.random() * slap.length)]);
    message.channel.send({embed});

  }

};
