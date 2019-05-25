const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class stabCommand extends Commando.Command {

	constructor(client) {

		super(client, {

			name:"stab",
			group: "interactions",
			memberName:"stab",
			description:"*stabs*",

		});

	}

	run(message) {

		const stab = ["https://media1.tenor.com/images/aebaa1a854ea1fc04286a8729b3b6cf4/tenor.gif?itemid=5381666"];
		const member = message.mentions.members.first();
		const randMember = message.guild.members.random().id;

		if (!member) {
			message.channel.send(message.author.username + " stabs " + "<@" + randMember + ">");
		}
		else {
			message.channel.send(message.author.username + " stabs " + `${member}`);
		}

		const embed = new RichEmbed()
			.setImage(stab[Math.floor(Math.random() * stab.length)]);
		message.channel.send({ embed });

	}

};
