const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class chopCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: "chop",
			group: "interactions",
			memberName: "chop",
			description: "*headchops*",
		});
	}

	run(message) {
		const chopIndex = ["https://i.imgur.com/szFvzEo.gif", "https://media1.tenor.com/images/fc8957e6a4c39e685e3d7059b4857109/tenor.gif?itemid=5700806"];
		const member = message.mentions.members.first();
		const randMember = message.guild.members.random().id;

		if (!member) {
			message.channel.send(`${message.author.username} head chops <@${randMember}>`);
		}
		else {
			message.channel.send(`${message.author.username} head chops ${member}`);
		}

		const embed = new RichEmbed()
			.setImage(chopIndex[Math.floor(Math.random() * chopIndex.length)]);
		message.channel.send({ embed });

	}

};
