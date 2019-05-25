const commando = require("discord.js-commando");

class SmugCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: "smug",
			group: "reactions",
			memberName: "smug",
			description: "Smug",
		});
	}
	run(message) {
		message.delete().catch(console.error);
		const imgNo = Math.floor(Math.random() * 58) + 1;
		message.channel.send("http://smug.moe/smg/" + imgNo + ".png");
	}
}

module.exports = SmugCommand;