const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class plsbulliCommand extends Commando.Command {

	constructor(client) {

		super(client, {

			name:"plsbulli",
			group:"reactions",
			memberName:"plsbulli",
			description:"pls bulli especially Satania",

		});

	}

	run(message) {

		const embed = new RichEmbed()
			.setImage("https://i.redd.it/20x9tn3ri8h01.png");
		message.channel.send({ embed });

	}

};
