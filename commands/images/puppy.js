const Commando = require("discord.js-commando");
const randomPuppy = require("random-puppy");

module.exports = class CatCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name:"puppy",
			group:"images",
			memberName:"puppy",
			description:"Posts a random puppy image",
		});
	}

	run(message) {
		try {
			randomPuppy()
				.then(url => {
					message.say(url);
				});
		}
		catch (err) {
			return message.reply(`Oh no! An error occurred: \`${err.message}\`. Please try again later.`);
		}
	}
};