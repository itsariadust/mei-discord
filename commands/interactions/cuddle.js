const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
const images = require("../../assets/json/interactions.json").cuddle;

module.exports = class cuddleCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: "cuddle",
			group: "interactions",
			memberName: "cuddle",
			description: "*cuddles*",
			args: [{
				key: "member",
				prompt: "Who do you want to hug?",
				type: "member",
				default: "",
			}],
		});
	}

	run(message, { member }) {
		if (member === "") member = message.guild.members.random().id;

		message.channel.send(`${message.author.username} cuddles <@${member}>`);
		const embed = new RichEmbed()
			.setImage(images[Math.floor(Math.random() * images.length)]);
		message.channel.send({ embed });
	}
};
