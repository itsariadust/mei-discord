const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class pervertCommand extends Commando.Command {

	constructor(client) {

		super(client, {

			name:"pervert",
			group:"reactions",
			memberName:"pervert",
			description:"Pervert!",

		});

	}

	run(message) {

		const embed = new RichEmbed()
			.setImage("https://pa1.narvii.com/5961/a6da21c2342e3acf67372b709e839fae4dbd1730_hq.gif");
		message.channel.send({ embed });

	}

};
