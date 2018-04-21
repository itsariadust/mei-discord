const Commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class ServerInfoCommand extends Commando.Command {

	constructor(client) {

		super(client, {

			name: "serverinfo",
			group: "info",
			memberName: "serverinfo",
			description: "Displays the server info",

		});

	}

	run(message, callback) {

		const owner = message.guild.owner;
		const vLevelNum = message.guild.verificationLevel;
		let vLevel;

		if (vLevelNum === 0) {

			vLevel = "None";

		}
		else if (vLevelNum === 1) {

			vLevel = "Low";

		}
		else if (vLevelNum === 2) {

			vLevel = "Medium";

		}
		else if (vLevelNum === 3) {

			vLevel = "High";

		}
		else if (vLevelNum === 4) {

			vLevel = "Extreme";

		}

		const embed = new RichEmbed();
		embed.setAuthor(message.guild.name, message.guild.iconURL);
		embed.setThumbnail(message.guild.iconURL);
		embed.addField("ID", message.guild.id);
		embed.addField("Server Owner", owner.user.username + "#" + owner.user.discriminator);
		embed.addField("Verification Level", vLevel);
		embed.addField("Region", message.guild.region);
		embed.addField("Channels", message.guild.channels.size, true);
		embed.addField("Members", message.guild.memberCount, true);
		embed.addField("Created On", message.guild.createdAt);
		embed.addField("Roles", message.guild.roles.size);

		return message.embed(embed).then(callback);

	}

};
