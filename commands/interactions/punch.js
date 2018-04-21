const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class punchCommand extends Commando.Command {

	constructor(client) {

		super(client, {

			name:"punch",
			group:"interactions",
			memberName:"punch",
			description:"You have been punched!",

		});

	}

	run(message) {

		const punch = ["https://media1.tenor.com/images/6afcfbc435b698fa5ceb2ff019718e6d/tenor.gif?itemid=10480971", "https://media1.tenor.com/images/c621075def6ca41785ef4aaea20cc3a2/tenor.gif?itemid=7679409", "https://media1.tenor.com/images/965fabbfcdc09ee0eb4d697e25509f34/tenor.gif?itemid=7380310", "https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829", "https://media1.tenor.com/images/b2db2a7fe0b9f68f2869b4e0d11a9490/tenor.gif?itemid=8932977"];
		const punchedMember = message.mentions.members.first();
		const guildMembers = message.guild.members.map(gm => gm.id);
		const randMember = guildMembers[Math.floor(Math.random() * guildMembers.length)];

		if (!punchedMember) {
			message.channel.send(message.author.username + " punches " + "<@" + randMember + ">");
		}
		else {
			message.channel.send(message.author.username + " punches " + `${punchedMember}`);
		}

		const embed = new RichEmbed()
			.setImage(punch[Math.floor(Math.random() * punch.length)]);
		message.channel.send({ embed });

	}

};
